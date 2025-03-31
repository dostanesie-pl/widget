<?php

// not using wp_kses_post() because we need to trigger <script> and initialize widget
echo $content;
