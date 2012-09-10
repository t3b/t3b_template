# COMPASS
# ----------------------------------------------
# Configuration: http://compass-style.org/help/tutorials/configuration-reference/
#
# ----------------------------------------------
# PRODUCTION
# compass compile -e production -s compressed --no-line-comments --force --trace --time
#

# Require any additional compass plugins here.



# paths
# Set this to the root of your project when deployed:
http_path       = "/"
sass_dir        = "Assets/_scss"
css_dir         = "Assets/css"
images_dir      = "Assets/img"
javascripts_dir = "Assets/js"

# You can select your preferred output style here (can be overridden via the command line):
# output option: nested, expanded, compact, compressed
output_style = :expanded

# The environment mode.
# Defaults to :production, can also be :development
# Use :development to see line numbers, file names, etc
environment = :development

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# disable the asset cache buster
asset_cache_buster :none
