## 1.1.4
**SCSS**
* Added a missing img whitespace fix from normalize.css
* Added variable-driven styling to the ChromeFrame object
* Added the BEM-methodology to helper classes
* Added [type="text"] as a fallback for the .searchform styling
* Extended usage of %sass-margin's for a vertical rythm
* Changed the nav abstraction to be used on the `<ul>` or `<ol>` element
* Changed SASS @import order to be able to use color-adjust in _variables
* Set typographic margins on each element instead of a stack using `@extend`
* Moved Chromeframe styling into a seperate file


## 1.1.3
**SCSS**
* Added .nav--fit helper class
* Added variable driven offset-by-# classes insertion
* Include a new HiDPI @media mixin
* Declare margins & paddings in single-direction declarations
* Scope link styles to links with a href attribute
* Removed sample styles & positioning for header elements

**JS**
* Update to jQuery 1.8.3


## 1.1.2
**SCSS**
* Added %placeholders for typographic margins
* Added a generated CSS timestamp in main.scss header-comment
* Set main.scss header-comment to !loud (will not get ignored while compiling)
* Set checkbox margin in em's to enable a scalable layout
* Cleaned up file-header comments for a cleaner css output
* Removed CSS font-smoothing


## 1.1.1
**Structure**
* Created a /generic folder for files wich will be generated
* Moved all /component files to /base
* Renamed /modules to /objects

**SCSS**
* Added a input-placeholder @mixin
* Added a @viewport @mixin
* Added $isOldIE integration for %border-box
* Added lots of documentation
* Splitted normalize.scss up into discrete partials
* Refactored structure for the config.rb file
* Changed project-setting $vars namespace to boolean
* .offset-by-# classes are now disabled by default
* Hide `<audio>` and `<video>` on @ media print


## 1.1.0
**SCSS**
* Added Compass image-url()-Function usage
* Added a %border-box placeholder
* Refactored structure for variables.scss
* BUGFIX: Removed height: auto; from iframes
* Removed controls positioning on `<video>`


## 1.0.9
**Structure**
* Renamed _placeholders.scss to _shared.scss
* Renamed _settings.scss to _variables.scss
* Added a _media.scss file

**SCSS**
* BUGFIX: Spacing for offset-by-# classes
* Direction based offset-by-# classes
* Added text-align on body {} for RTL-Templates
* Automated ::selection-styling
* Styling for `<label>`
* Styling for `<figure>` and `<figcaption>`
* Styling for subheaders in `<hgroup>`


## 1.0.8
**SCSS**
* Added the color-adjust function from @necolas
* Added 'stacked' navigation mode
* Added a 'centered' mode for grids
* Changes to the grid for RTL-Templates
* Changed @hyphens into a %placeholder


## 1.0.7
**Structure**
* Renamed /common/ to /base/
* Renamed /modules/ to /components/

**SCSS**
* Added a font-size @mixin to embrace a vertical rhythm & 'rem' as a css unit
* Added a %non-print placeholder
* Increased the clickable area of links
* Removed vertical spacing from nested lists
* Stacking grid-system
* Changed #header & #footer to classes


## 1.0.6
**Structure**
* Cleaning the /img/ folder

**SCSS**
* Corrected margins on typography elements
* Renamed $baseColor to $baseTextColor
* Force vertical scrollbar on the html element


## 1.0.5
**SCSS**
* Additions to forms.scss
* Removed Modernizr Mixins
* Style consistency

**JS**
* Update to jQuery 1.8.2


## 1.0.4
**Structure**
* Renaming /globals to /common
* Renamed /ext to /extensions

**SCSS**
* Added min-width to some MQ's
* Preset CD-Colors
* Modular searchform styling


## 1.0.1
**SCSS**
* More $isOldIE integration
* Cleaning up _settings.scss


## 1.0.0 Yay!
**Structure**
* OOCSS Setup & Structure changes

**SCSS**
* Removed the default touch icons
* Added a placeholder file
* Added a HDPI MQ-Mixin
* Renamed MQ-Mixin to respondTo
* Renamed media-queries.scss to print.scss
* Added settings-based viewport rules
* Update normalize.css to 2.0.1 with the ability to fallback


## 0.9.5
**SCSS**
* Updated .ir
* Removed placeholder styles

**JS**
* Update to jQuery 1.8.1


## 0.9.4
**SCSS**
* Added Modernizr Fallback Mixins


## 0.9.3
**SCSS**
* CSS Viewport rules
* CSS output style to :expanded
* Normalize version info
* Simpler logo styling

**JS**
* Update to Modernizr 2.6.2


## 0.9.2 Update to SASS 3.2
**SCSS**
* Included a MQ-System
* Included oldIE-Mixins for faster development
* Small changes to Typo
* Sprite Placeholder


## 0.9.1
**JS**
* Folder setup and placeholders
* Update Modernizr to 2.6.1

## Initial commit
