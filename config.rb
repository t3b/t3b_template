# COMPASS
# ----------------------------------------------
# Configuration: http://compass-style.org/help/tutorials/configuration-reference/


# Require any additional compass plugins here.


# TIMESTAMP FUNCTION
require File.join(File.dirname(__FILE__), 'timestamp.rb')


# COMPASS PATHS
# Set this to the root of your project when deployed:
http_path       = "/"

sass_dir        = "Assets/_scss"
css_dir         = "Assets/css"
images_dir      = "Assets/img"
javascripts_dir = "Assets/js"


# COMPASS MODE
# Development
output_style = :expanded
environment = :development

# Production
# output_style = :compressed
# environment = :production


# COMPASS SETTINGS
# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# disable the asset cache buster
asset_cache_buster :none
