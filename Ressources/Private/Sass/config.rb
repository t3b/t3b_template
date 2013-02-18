#
# Compass Configuration file
#
# @author Tyll Weiß <t.weiss@exinit.de>
# @link http://compass-style.org/help/tutorials/configuration-reference/
#


# =============================================================================
# COMPASS PLUGINS
# =============================================================================


# =============================================================================
# RUBY FUNCTIONS
# =============================================================================
require File.join(File.dirname(__FILE__), 'functions.rb')


# =============================================================================
# COMPASS PATHS
# =============================================================================
# Set this to the root of your project when deployed:
http_path       = "/"
sass_dir        = "/"
css_dir         = "../../Public/Stylesheets"
images_dir      = "../../Public/Images"
javascripts_dir = "../../Public/Javascripts"


# =============================================================================
# COMPASS COMPRESSION SETTINGS
# =============================================================================
output_style = :compressed
environment = :development

# Uncomment this line and set the output style to ":nested" to enable SASS Sourcemaps in Chrome
# sass_options = { :debug_info => true }


# =============================================================================
# COMPASS SETTINGS
# =============================================================================
# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# disable the asset cache buster
asset_cache_buster :none