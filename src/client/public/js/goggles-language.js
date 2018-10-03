/**
 * This whole document is a scratch pad, basically.  It will be turned into
 * react components soon.  We just want to be able to demo functionality
 * for now.
 *
 * This pulls from @crupar's polibias.js (https://raw.githubusercontent.com/crupar/polibias/master/index.json)
 * and from @slifty's original truth goggles (https://raw.githubusercontent.com/slifty/truth-goggles/master/public/js/goggles.js)
 */

var words = {
  "Activist judges": 1,
  "Big government": 1,
  "Chain migration": 1,
  "Anchor baby": 1,
  "Climate Change": 1,
  "Death panels": 1,
  "Death tax": 1,
  "Defense of Marriage": 1,
  "Energy exploration": 1,
  "Worker": 1,
  "Employee": 1,
  "Assault rifle": 1,
  "Gun Rights": 1,
  "Gun Control": 1,
  "Rifle": 1,
  "Firearm": 1,
  "Weapon": 1,
  "Handgun": 1,
  "Sidearm": 1,
  "Undocumented worker": 1,
  "Illegal aliens": 1,
  "Aliens": 1,
  "Immigrant": 1,
  "Chain migration": 1,
  "Anchor baby": 1,
  "Border security": 1,
  "Death Tax": 1,
  "Estate Tax": 1,
  "Tax relief": 1,
  "Tax reform": 1,
  "Tax simplification": 1,
  "Tax Breaks": 1,
  "Tax breaks for the wealthy": 1,
  "Global economy": 1,
  "Globalization": 1,
  "Capitalism": 1,
  "Free market economy": 1,
  "Outsourcing": 1,
  "Foreign trade": 1,
  "International trade": 1,
  "Domestic production": 1,
  "American production": 1,
  "Right to work": 1,
  "School choice": 1,
  "Parental choice": 1,
  "Equal opportunity in education": 1,
  "Opportunity scholarships": 1,
  "The right to choose": 1,
  "Health care choice": 1,
  "Comprehensive health reform": 1,
  "Unborn child": 1,
  "Fetus": 1,
  "Government-run health care": 1,
  "Government-run health insurance": 1,
  "Government takeover of health care": 1,
  "Partial birth abortion": 1,
  "Pro-life": 1,
  "Pro-choice": 1,
  "Right to life": 1,
  "Family values": 1,
  "Socialist": 1,
  "War on Terror": 1,
  "Comprehensive Health Reform": 1,
  "Liberal media": 1,
  "Exploring for energy": 1,
  "Energy exploration": 1,
  "Tax breaks for the wealthy": 1,
  "Big government": 1,
  "Climate Change": 1,
  "Death panels": 1,
  "Defense of Marriage": 1,
  "Marriage equality": 1,
  "Affirmative Action": 1,
  "Affordable Care Act": 1,
  "Patient Protection and Affordable Care Act": 1,
  "American Jobs Act": 1,
  "Big oil": 1,
  "Employee Free Choice Act": 1,
  "Factory Farm": 1,
  "Industrial Farm": 1,
  "Family Farm": 1,
  "Public Option": 1,
  "War on Woman": 1,
  "National Debt": 1,
  "Obamacare": 1,
  "ACA": 1
}




/*!
 * Truth Goggles Plugin
 * Original author: @slifty
 * Licensed under the MIT license
 */

function loadGogglesPlugin(jQuery, queuedCall) {
    (function ( $, window, document, undefined ) {
        var hasBeenLoaded = false;

        // Create the defaults once
        var pluginName = "goggles",
            defaults = {
                layerId: 0,
                mode: "goggles",
                server: "http://localhost:3000",
                userId: 0,
                trackUrl: ""
            };

        // The actual plugin constructor
        function Plugin( element, options ) {
            this.element = element;
            this.options = $.extend( {}, defaults, options);

            this.layer = null;

            this._defaults = defaults;
            this._name = pluginName;

            this.init();
        }

        Plugin.prototype = {

            init: function() {
                var self = this;

                // Load the goggles CSS (if it hasn't been loaded)
                if(hasBeenLoaded == false) {
                    $('<link>')
                      .appendTo('head')
                      .attr('type', 'text/css')
                      .attr('rel', 'stylesheet')
                      .attr('href', this.options.server + '/static/css/goggles.css');
                    hasBeenLoaded = true;
                }

                // Render the side pane
                self.renderSidepane();

                // Load in the layer
                self.layer = self.generateLayer(words);
                self.renderLayer(self.layer);
            },

            generateLayer: function(words) {
              var layer = {
                "contributions": []
              };
              for(var word in words) {
                var leaning = words[word];
                var contribution = {
                  "statements": [],
                  "evidences": [],
                  "arguments": [],
                  "questions": [],
                };
                var statement = {
                  "context": word,
                  "content": word
                };
                var argument = {
                  summary: "",
                  content: ""
                };

                if(leaning == 1) {
                  argument.summary = "This is a politically charged word.";
                  argument.content = "Democrats and Republicans are both likely to have strong gut reactions when they see this, possibly in conflicting directions."
                } else if (leaning == 2) {
                  argument.summary = "This is seen by Republicans as Democratically leaning";
                  argument.content = "Republicans who see this word are likely to associate it with Democratically leaning ideology."
                } else {
                  argument.summary = "This is seen by Democrats as Republican leaning.";
                  argument.content = "Democrats who see this word are likely to associate it with Republican leaning ideology."
                }

                contribution.statements.push(statement);
                contribution.arguments.push(argument);
                layer.contributions.push(contribution);
              }
              return layer;
            },

            renderLayer: function(layer) {
                var self = this;
                for(var x in layer.contributions) {
                    var contribution = layer.contributions[x];
                    var targets = this.findTargets(contribution);
                    self.renderTargets(contribution, targets);
                }

                $(self.element).find(".gogglesTarget").click(function(e) {
                    var contribution = $(this).data("contribution");
                    self.renderContribution(contribution);
                });
            },

            findTargets: function(contribution) {
                var self = this;
                var text = $(this.element).text().toLowerCase();
                var targets = [];

                for(var x in contribution.statements) {
                    var statement = contribution.statements[x];
                    var context = statement.context.toLowerCase();
                    var content = statement.content.toLowerCase();

                    // Create regular expressions to find the context / content
                    var contextRegEx = new RegExp('[^\\w\\s]*' + context.replace(/\W+/g, ' ').trim().replace(/\s+/g,'\\W+') + '[^\\w\\s]*','g');
                    var contentRegEx = new RegExp('[^\\w\\s]*' + content.replace(/\W+/g, ' ').trim().replace(/\s+/g,'\\W+') + '[^\\w\\s]*');
                    var contextMatch;
                    while ((contextMatch = contextRegEx.exec(text)) !== null) {
                        var contentMatch = contentRegEx.exec(contextMatch[0]);
                        console.log(contextMatch);
                        var target = [contentMatch.index + contextMatch.index, contentMatch[0].length];
                        targets.push(target);
                    }

                }
                return targets;
            },

            renderTargets: function(contribution, targets) {
                var self = this;
                for(var x in targets) {
                    var target = targets[x];
                    var start = target[0];
                    var end = start + target[1];

                    self.createSPAN(start, end, ["gogglesTarget", "gogglesContribution-" + contribution["id"]], {"contribution": contribution});
                }
            },

            renderContribution: function(contribution) {
                var self = this;

                // Create the modal background
                var $background = $("<div>")
                    .addClass("gogglesModalBackground")
                    .hide()
                    .appendTo($(self.element));

                // Create the phrase that will appear above the modal
                var $modal = $("<div>")
                    .addClass("gogglesModal")
                    .hide()
                    .appendTo($(self.element));

                var $contribution = $("<div>")
                    .addClass("gogglesContribution")
                    .appendTo($modal);

                for(var x in contribution.statements) {
                    var statement = contribution.statements[x];
                    var $statement = $("<div>")
                        .addClass("gogglesStatement")
                        .text('"' + statement.content.replace(/^[“”"’']|[“”"’']$/g,"").trim() + '"')
                        .appendTo($contribution);
                }

                for(var x in contribution.questions) {
                    var question = contribution.questions[x];
                    var $question = $("<h1>")
                        .addClass("gogglesQuestion")
                        .text(question.content)
                        .prepend("<div class='gogglesQuestionLogo'></div>")
                        .appendTo($contribution);
                }

                for(var x in contribution.arguments) {
                    var argument = contribution.arguments[x];
                    var $argument = $("<div>")
                        .addClass("gogglesArgument")
                        .appendTo($contribution);

                    var $summary = $("<div>")
                        .addClass("gogglesArgumentSummary")
                        .html(argument.summary)
                        .appendTo($argument)
                        .click(function() {
                            $(this).parent().find(".gogglesArgumentContent")
                                .slideToggle(100);
                        })

                    var $content = $("<div>")
                        .addClass("gogglesArgumentContent")
                        .html(argument.content)
                        .hide()
                        .appendTo($argument);
                }

                var $close = $("<div>")
                    .addClass("gogglesModalClose")
                    .text("Close")
                    .appendTo($modal)
                    .click(function() {
                        $modal.remove();
                        $background.remove();

                        if(self.options.trackUrl != "") {
                            $.ajax({
                                url: self.options.trackUrl,
                                method: "get",
                                data: {
                                    c: contribution.id,
                                    a: "close",
                                    u: self.options.userId
                                }
                            })
                        }
                    });

                if(self.options.trackUrl != "") {
                    $.ajax({
                        url: self.options.trackUrl,
                        method: "get",
                        data: {
                            c: contribution.id,
                            a: "open",
                            u: self.options.userId
                        }
                    })
                }

                $background.fadeIn();
                $modal.fadeIn();
                $(".gogglesContribution-" + contribution.id).addClass("gogglesTarget-viewed");
            },

            renderSidepane: function() {
                var self = this;

                var $sidepane = $("<div>")
                    .addClass("gogglesSidepane")
                    .hide()
                    .appendTo($(self.element));

                var $handle = $("<div>")
                    .addClass("gogglesSidepaneHandle")
                    .appendTo($sidepane)
                    .click(function() {
                        if($sidepane.hasClass("closed")) {
                            $sidepane
                                .removeClass("closed")
                                .animate({"width": "220px"}, {"queue":false, "duration": 500})
                        }
                        else {
                            $sidepane
                                .addClass("closed")
                                .animate({"width": "15px"}, {"queue":false, "duration": 500})
                        }
                    });

                var $content = $("<div>")
                    .addClass("gogglesSidepaneContent")
                    .html('<div class="gogglesSidepaneLogo"></div><div class="gogglesSidepaneInstuction"><p>Click on the <span class="gogglesTargetExample">highlighted phrases</span> to consider them more carefully.</p></div>')
                    .appendTo($sidepane);

                $sidepane.fadeIn();
            },

            createSPAN: function(targetStart, targetEnd, classes, data) {
                var self = this;
                // This method inserts a series of spans, breaking them apart as needed if the text elements cross multiple DOM objects
                var amountHighlighted = 0;
                (function recursive(object, cursor) {
                    if(object.childNodes.length == 0)
                        return object instanceof Text?object.length:0; // Only Text objects count toward character count (otherwise this would include things like HTML comments)

                    // Loop through each child to find the beginning and end
                    var children = Array.prototype.slice.call(object.childNodes);
                    var familyLength = 0;

                    var startIndex = -1,
                        endIndex = -1,
                        startOffset = 0,
                        endOffset = 0,
                        endNodeLength = 0;

                    for(var y = 0; y < children.length ; ++y) {
                        var child = children[y],
                            $child = $(child),
                            childStart = cursor,
                            childLength = $child.text().length,
                            childEnd = childStart + childLength;

                        cursor += childLength;

                        if(targetEnd < childStart) continue; // We're past the end of the target
                        if(targetStart >= childEnd) continue; // We haven't hit the start of the target

                        // This child contains part of the target.
                        if(child instanceof Text && $.trim(child.textContent).length != 0) {
                            // Wrap the appropriate portion in a range
                            var range = document.createRange();
                            range.setStart(child, Math.max(0,targetStart - childStart));
                            range.setEnd(child, Math.min(childLength, targetEnd - childStart));

                            // Create the span
                            var s = document.createElement("span"),
                                $s = $(s);
                            range.surroundContents(s);

                            // Add data
                            for(var i in data)
                                $.data(s,i, data[i]);

                            // Add classes
                            for(var i=0; i < classes.length; ++i)
                                $s.addClass(classes[i]);
                            amountHighlighted += $s.text().length;
                        } else {
                            recursive(child, childStart);
                        }
                    }
                    return 0;
                })(self.element, 0);
            }

        };

        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        $.fn[pluginName] = function ( options ) {
            return this.each(function () {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName,
                    new Plugin( this, options ));
                }
            });
        };

    })(jQuery, window, document );

    queuedCall();
}

// We use jQuery right now, so we have to see if it exists and then load it if needed
var truthGoggles;
(function() {
    var loaded = false;
    var queuedCall = function() {};
    truthGoggles = function(options) {
        queuedCall = function() {
            jQuery(function(){jQuery("body").goggles(options)});
        }
        if(loaded)
            queuedCall();
    }


    if(typeof jQuery === 'undefined') {
        function getScript(url, success) {
            var script = document.createElement('script');
                 script.src = url;

            var head = document.getElementsByTagName('head')[0],
            done = false;

            // Attach handlers for all browsers
            script.onload = script.onreadystatechange = function() {
                if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    done = true;

                    // callback function provided as param
                    success();

                    script.onload = script.onreadystatechange = null;
                    head.removeChild(script);
                };
            };
            head.appendChild(script);
        };

        getScript('//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js', function() {
            if (typeof jQuery != 'undefined') {
                loadGogglesPlugin(jQuery, queuedCall);
                loaded = true;
            }
        });
    } else {
        loadGogglesPlugin(jQuery, queuedCall);
        loaded = true;
    }
})();
