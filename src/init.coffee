###*
# @class d3plus
###
d3plus         = {}
window.d3plus  = d3plus if typeof window isnt "undefined"
module.exports = d3plus

###*
# The current version of **D3plus** you are using. Returns a string in
# [semantic versioning](http://semver.org/) format.
# @property d3plus.version
# @for d3plus
# @type String
# @static
###
d3plus.version = "1.8.1 - Cerulean (pre-release)"

###*
# The URL for the repo, used internally for certain error messages.
# @property d3plus.repo
# @for d3plus
# @type String
# @static
###
d3plus.repo = "https://github.com/alexandersimoes/d3plus/"

###*
# D3plus SVG Textwrapping
# @class d3plus.textwrap
# @for d3plus
###
d3plus.textwrap = require "./textwrap/textwrap.coffee"
