# TIMESTAMP RUBY FUNCTION
# ----------------------------------------------
# From: http://stackoverflow.com/questions/13022461/add-timestamps-to-compiled-sass-scss
# Thanks to hopper - http://stackoverflow.com/users/1026353/hopper


module Sass::Script::Functions
    def timestamp()
        return Sass::Script::String.new(Time.now.to_s)
    end
end