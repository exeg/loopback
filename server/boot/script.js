/*module.exports = function(app) {
var cloudant = app.dataSources.cloudant;

cloudant.automigrate('User', function(err) {
   if (err) throw (err);
   var User = app.models.User;

   User.create([
    {username: 'Admin', email: 'exexeg@gmail.com', password: 'abcdef'},
    {username: 'exeg', email: 'exeg@mail.com', password: 'abcdef'}
  ], function(err, users) {
    if (err) throw (err);
     var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw (err);
       //make admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw (err);
      });
    });
  });
});

};*/
