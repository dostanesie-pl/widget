variable "image" {
  type = string
}

job "dostnaesie-prod-cdn" {
  type = "service"

  datacenters = ["*"]
  namespace   = "dostanesie"

  group "cdn" {
    count = 1

    task "cdn" {
      driver = "docker"

      config {
        image = var.image
        ports = ["cdn"]
      }

      resources {
        memory = 512
      }
    }

    network {
      port "cdn" {
        to = 80
      }
    }

    service {
      name = "dostanesie-cdn-prod"
      port = "cdn"

      provider = "nomad"

      check {
        type     = "http"
        port     = "cdn"
        path     = "/health"
        interval = "5s"
        timeout  = "1s"

        check_restart {
          limit = 3
          grace = "5s"
        }
      }

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.dostanesie-cdn-prod.rule=Host(`cdn.dostanesie.pl`)",
      ]
    }

    restart {
      attempts = 3
      delay    = "15s"
      mode     = "delay"
      interval = "5m"
    }

    update {
      max_parallel      = 1
      min_healthy_time  = "10s"
      healthy_deadline  = "5m"
      progress_deadline = "1h"
      stagger           = "20s"
    }
  }
}
