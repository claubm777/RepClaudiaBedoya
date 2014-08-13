   
    App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
            // alert('saved model: '+JSON.stringify(model));
            var punto2 = $('#respuesta2');
            // punto2.html('saved model: '+JSON.stringify(model));
            var firstName = $('#firstName').val();
            var lastName = $('#lastName').val();
            var birthDate = $('#birthDate').val();
            punto2.html('El usuario con nombre '+firstName+' y apellido '+lastName+' nació el '+birthDate); 
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));

            $('#birthDate').datepicker();

        }
    });