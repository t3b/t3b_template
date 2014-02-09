#
# Compass Configuration file
#
# @link http://compass-style.org/help/tutorials/configuration-reference/
#


# =============================================================================
# COMPASS PLUGINS
# =============================================================================


# =============================================================================
# SASS SCRIPT FUNCTIONS
# =============================================================================
module Sass::Script::Functions
	# Timestamp function
	#
	# @author 'Hopper' <http://stackoverflow.com/users/1026353/hopper>
	# @link http://stackoverflow.com/questions/13022461/add-timestamps-to-compiled-sass-scss
	def timestamp()
		return Sass::Script::String.new(Time.now.to_s)
	end

	# Get the name of the extension name(Root folder name)
	def ext_directory()
		return Sass::Script::String.new(File.basename(File.expand_path('../../../..', __FILE__)))
	end
end


# =============================================================================
# COMPASS PATHS
# =============================================================================
http_path       = "/"
sass_dir        = "/"
css_dir         = "../../Public/Stylesheets"
images_dir      = "../../Public/Images"
javascripts_dir = "../../Public/Javascripts"


# =============================================================================
# COMPASS COMPRESSION SETTINGS
# =============================================================================
# CSS Output style - Options are the following: ':nested', ':expanded', ':compact' or ':compressed'
output_style = :compressed

# Compass Environment - Setting this to ':production' will remove all sub file-header comments
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
