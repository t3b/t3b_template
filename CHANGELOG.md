## 1.1.8
**SCSS**
* Added a _head.scss
* Added the form--inline abstraction
* Added half margin extends to _typography.scss
* Added a .print-hidden class
* Disable support for oldIE by default
* Enable box-sizing: border-box; by default
* All grid widths are now percentages
* Scoped all variables inside _variables.scss to !default
* Renamed all grid related classes
* Renamed .siteLogo to .site-logo
* Renamed %hyphens to %text-break
* Removed the %inline-block and %replace placeholder

**HTML**
* Enabled the Chromeframe information toolbar for > IE8

## 1.1.7
**Structure**
* Set the file-structure to the extbase scheme
* Change the file-header structure to the phpDoc scheme

**HTML**
*	Add initial-scale=1" to the meta viewport tag

**SCSS**
* Added a hyphens @mixin
* Added a $templatePath variable
* Added a $package_name variable to quickly change the @package tag
* Added the debug.scss file from inuit
* Added the SASS source map option in the config file
* Update normalize.css to 2.1.0
* Extend the @viewport mixin to support all major descriptors of the spec
* Fixed a bug in the rem font-size calculation
* Replaced the .columns main class with an CSS `[class^=]` selector

**JS**
* Update to jQuery 1.9.1
* Remove the app.js file


## 1.1.6
**SCSS**
* Added a more flexible grid setup with a grid @mixin
* Added a `%btn` placeholder
* Added default stylings for buttons and text inputs
* Add a possible fix for a spacing issue in chrome for `type="time"` inputs
* Changed the centered grid helper to single direction margins
* Changed the grid width classes to the BEM namespace 'columns--'
* Removed the ability to expand `<textarea>` horizontally
* Removed `<figure>` from the margin reset


## 1.1.5
**SCSS**
* Added a vrythm check for the font-size @mixin
* Added a `.ir` helper @mixin
* Added a hdpi-image helper @mixin
* Added some typographic helper classes
* Added a `%cf` placeholder for a quicker clearfix @extend
* Moved `_shared.scss` to `/generic/`
* Removed OldIE-Class @mixins
* Removed `<small>` styling inside headings
* Removed `<audio>` and `<video>` styling


## 1.1.4
**SCSS**
* Added a missing img whitespace fix from normalize.css
* Added variable-driven styling to the ChromeFrame object
* Added the BEM-methodology to helper classes
* Added `[type="text"]` as a fallback for the .searchform styling
* Extended usage of %sass-margin's for a vertical rythm
* Changed the nav abstraction to be used on the `<ul>` or `<ol>` element
* Changed SASS `@import` order to be able to use color-adjust in _variables
* Set typographic margins on each element instead of a stack using `@extend`
* Moved Chromeframe styling into a seperate file


## 1.1.3
**SCSS**
* Added `.nav--fit` helper class
* Added variable driven `.offset-by-#` classes insertion
* Include a new HiDPI `@media` @mixin
* Declare margins & paddings in single-direction declarations
* Scope link styles to links with a `href=""` attribute
* Removed sample styles & positioning for header elements

**JS**
* Update to jQuery 1.8.3


## 1.1.2
**SCSS**
* Added placeholders for typographic margins
* Added a generated CSS timestamp in main.scss header-comment
* Set `main.scss` header-comment to !loud (won't get ignored while compiling)
* Set checkbox margin in em's to enable a scalable layout
* Cleaned up file-header comments for a cleaner css output
* Removed CSS font-smoothing


## 1.1.1
**Structure**
* Created a `/generic/` folder for files wich will be generated
* Moved all `/component/` files to `/base/`
* Renamed `/modules/` to `/objects/`

**SCSS**
* Added a input-placeholder @mixin
* Added a @viewport @mixin
* Added `$isOldIE` integration for `%border-box`
* Added lots of documentation
* Splitted `_normalize.scss` into discrete partials
* Refactored structure for the `config.rb` file
* Changed project-setting variables namespace to boolean
* `.offset-by-#` classes are now disabled by default
* Hide `<audio>` and `<video>` on @ media print


## 1.1.0
**SCSS**
* Added Compass image-url()-Function usage
* Added a `%border-box` placeholder
* Refactored structure for `_variables.scss`
* BUGFIX: Removed `height: auto;` from iframes
* Removed controls positioning on `<video>`


## 1.0.9
**Structure**
* Renamed `_placeholders.scss` to `_shared.scss`
* Renamed `_settings.scss` to `_variables.scss`
* Added a `_media.scss` file

**SCSS**
* BUGFIX: Spacing for `offset-by-#` classes
* Direction based `offset-by-#` classes
* Added text-align on body for RTL-Templates
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
* Renamed `/common/` to `/base/`
* Renamed `/modules/` to `/components/`

**SCSS**
* Added a font-size @mixin to embrace a vertical rhythm & 'rem' as a css unit
* Added a `%non-print` placeholder
* Increased the clickable area of links inside a paragraph
* Removed vertical spacing from nested lists
* Enhance the grid to support a stackable grid
* Renamed all #id's to .classes


## 1.0.6
**Structure**
* Cleaning the `/img/` folder

**SCSS**
* Fixed some margins on typography elements
* Renamed `$baseColor` to `$baseTextColor`
* Force the vertical scrollbar on the html element


## 1.0.5
**SCSS**
* Additions to forms.scss
* Removed Modernizr @mixins
* Style consistency

**JS**
* Update to jQuery 1.8.2


## 1.0.4
**Structure**
* Renaming `/globals/` to `/common/`
* Renamed `/ext/` to `/extensions/`

**SCSS**
* Added min-width to some MQ's
* Added preset CD-Colors
* Modular searchform styling


## 1.0.1
**SCSS**
* More $isOldIE integration
* Reduced `_settings.scss` to a minimum of varirables


## 1.0.0 Yay!
**Structure**
* OOCSS Setup & Structure changes

**SCSS**
* Added a placeholder file
* Added a HDPI MQ @mixin
* Added settings-based viewport rules
* Update normalize.css to 2.0.1 with the ability to fallback to 1.0.1
* Renamed MQ @mixin to respondTo
* Renamed `_media-queries.scss` to `_print.scss`
* Removed the default touch icons


## 0.9.5
**SCSS**
* Updated the image replacement helper class
* Removed input Placeholder styles

**JS**
* Update to jQuery 1.8.1


## 0.9.4
**SCSS**
* Added Modernizr Fallback @mixins


## 0.9.3
**SCSS**
* Added CSS Viewport rules
* Add a Normalize.css version info
* Set SCSS output style to :expanded
* Simplified the logo styling

**JS**
* Update to Modernizr 2.6.2


## 0.9.2 (Update to SASS 3.2)
**SCSS**
* Added a MQ-System
* Added a sprite Placeholder
* Added oldIE @mixins for faster development
* Small changes to Typo


## 0.9.1
**Structure**
* Folder setup and placeholders

**JS**
* Update Modernizr to 2.6.1


## Initial commit
