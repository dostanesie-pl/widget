#!/bin/bash

# Function to extract version from package.json files
extract_package_json_version() {
    local file=$1
    if [ -f "$file" ]; then
        grep -o '"version": "[^"]*"' "$file" | cut -d'"' -f4
    else
        echo "Error: File $file not found"
        return 1
    fi
}

# Function to extract version from readme.txt
extract_readme_version() {
    local file=$1
    if [ -f "$file" ]; then
        grep "Stable tag:" "$file" | sed 's/Stable tag: *//'
    else
        echo "Error: File $file not found"
        return 1
    fi
}

# Function to extract version from .po and .pot files
extract_po_version() {
    local file=$1
    if [ -f "$file" ]; then
        grep "Project-Id-Version:" "$file" | grep -o "calculator [0-9.]*" | cut -d' ' -f2
    else
        echo "Error: File $file not found"
        return 1
    fi
}

# Function to check if all versions are the same
check_versions() {
    local first_version=$1
    shift

    for version in "$@"; do
        if [ "$version" != "$first_version" ]; then
            return 1
        fi
    done

    return 0
}

# Function to display usage information
show_usage() {
    echo "Usage: $0 [OPTION]"
    echo "Options:"
    echo "  --check       Check if versions match across all files"
    echo "  --get-version Check if versions match and print the version if they do"
    echo "  --verbose     Show detailed version information for all files"
    echo ""
    echo "Example:"
    echo "  $0 --check       # Returns exit code 0 if versions match"
    echo "  $0 --get-version # Outputs only the version number if versions match"
    echo "  $0 --verbose     # Shows all versions from each file"
}

# Main function
main() {
    # Parse command line options
    local option=""

    if [ $# -eq 0 ]; then
        show_usage
        return 0
    fi

    option=$1
    if [[ "$option" != "--check" && "$option" != "--get-version" && "$option" != "--verbose" ]]; then
        show_usage
        return 1
    fi

    # Extract versions from different files
    local main_pkg_version=$(extract_package_json_version "./package.json")
    local wp_pkg_version=$(extract_package_json_version "./wordpress-plugin/calculator-dostanesie-pl/package.json")
    local readme_version=$(extract_readme_version "./wordpress-plugin/calculator-dostanesie-pl/readme.txt")
    local po_pl_version=$(extract_po_version "./wordpress-plugin/calculator-dostanesie-pl/languages/dstpl-pl_PL.po")
    local pot_version=$(extract_po_version "./wordpress-plugin/calculator-dostanesie-pl/languages/dstpl.pot")

    # Check if any extraction failed
    if [[ -z "$main_pkg_version" || -z "$wp_pkg_version" || -z "$readme_version" || -z "$po_pl_version" || -z "$pot_version" ]]; then
        [[ "$option" != "--get-version" ]] && echo "❌ Error: Failed to extract one or more versions."
        return 1
    fi

    # Determine behavior based on option
    if [[ "$option" == "--check" ]]; then
        # Check if all versions are the same
        if check_versions "$main_pkg_version" "$wp_pkg_version" "$readme_version" "$po_pl_version" "$pot_version"; then
            echo "✅ Success: All versions match ($main_pkg_version)"
            return 0
        else
            echo "❌ Error: Versions don't match across all files."
            return 1
        fi
    elif [[ "$option" == "--get-version" ]]; then
        # Only output version if all match
        if check_versions "$main_pkg_version" "$wp_pkg_version" "$readme_version" "$po_pl_version" "$pot_version"; then
            echo "$main_pkg_version"
            return 0
        else
            return 1
        fi
    elif [[ "$option" == "--verbose" ]]; then
        # Verbose mode: print all extracted versions
        echo "Versions found:"
        echo "- ./package.json: $main_pkg_version"
        echo "- ./wordpress-plugin/calculator-dostanesie-pl/package.json: $wp_pkg_version"
        echo "- ./wordpress-plugin/calculator-dostanesie-pl/readme.txt: $readme_version"
        echo "- ./wordpress-plugin/calculator-dostanesie-pl/languages/dstpl-pl_PL.po: $po_pl_version"
        echo "- ./wordpress-plugin/calculator-dostanesie-pl/languages/dstpl.pot: $pot_version"

        # Check if all versions are the same
        if check_versions "$main_pkg_version" "$wp_pkg_version" "$readme_version" "$po_pl_version" "$pot_version"; then
            echo -e "\n✅ Success: All versions match ($main_pkg_version)"
            return 0
        else
            echo -e "\n❌ Error: Versions don't match across all files."
            return 1
        fi
    fi
}

# Execute main function with all command line arguments
main "$@"