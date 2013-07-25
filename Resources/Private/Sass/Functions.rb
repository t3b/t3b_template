#
# Ruby functions
#


# =============================================================================
# Timestamp function
#
# @author 'Hopper' <http://stackoverflow.com/users/1026353/hopper>
# @link http://stackoverflow.com/questions/13022461/add-timestamps-to-compiled-sass-scss
# =============================================================================
module Sass::Script::Functions
    def timestamp()
        return Sass::Script::String.new(Time.now.to_s)
    end
end