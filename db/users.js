var userrecord = [
    { id: 1, username: "admin", password: "admin", displayName: 'Admin', emails: [ { value: 'admin@uniandes.edu.co' }]}
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (userrecord[idx]) {
      cb(null, userrecord[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
    process.nextTick(function() {
      for (var i = 0, len = userrecord.length; i < len; i++) {
        var record = userrecord[i];
        if (record.username === username) {
          return cb(null, record);
        }
      }
      return cb(null, null);
    });
  }

