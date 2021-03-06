(function($, Backbone) {
	
	var Notification = Backbone.View.extend( {
        tagName: 'div',
        className: 'im-event-notification topBar messages',
        events: {
            'click a.closer': 'close'
        },
        title: 'Success:',
        close: function() {
            var self = this;
            this.$el.hide('slow', function() {self.remove()});
        },
        render: function() {
            this.$el.append('<a class="closer" href="#">Hide</a>');
            this.$el.append('<p><span><b>' + this.title + '</b></span></p>');
            
            this.appendContent();
            this.$el.prependTo('#pagecontentcontainer');
            return this;
        },
        appendContent: function() {
        	 this.$el.append(this.options.message);
        }
    } );
	
	var FailureNotification = Notification.extend( {
        className: "im-event-notification topBar errors",
        title: 'Oops!'
    } );
	
	this.Notification = Notification;
	this.FailureNotification = FailureNotification;
	
}).call(window, jQuery, Backbone);