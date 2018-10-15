  
  
  const bringo=function(req,res){
      res.render('bringo', { title: 'Express' })
};
      const user=function(req,res){
      res.render('user', { title: 'Express' })
};
      const usertype=function(req,res){
      res.render('usertype', { title: 'Express' })
};
      const record=function(req,res){
      res.render('record', { title: 'Express' })
};
      const login=function(req,res){
      res.render('login', { title: 'Express' })
};
      const signup=function(req,res){
      res.render('signup', { title: 'Express' })  
};
      const forget=function(req,res){
      res.render('forget', { title: 'Express' })
};
  //user parts
      const admin=function(req,res){
      res.render('admin', { title: 'Express' })
};
      const teacher=function(req,res){
      res.render('teacher', { title: 'Express' })
};
      const student=function(req,res){
      res.render('student', { title: 'Express' })
};
      const library_staff=function(req,res){
      res.render('library_staff', { title: 'Express' })
};
      const alumni=function(req,res){
      res.render('alumni', { title: 'Express' })
};
   //issue & feedback
      const upload= function(req, res){
            res.render('download',{title: 'Express'})
      };
      const formpage=function(req,res){
      res.render('formpage', { title: 'Express' })
};
      const formpage1=function(req,res){
      res.render('formpage', { title: 'Express' })
};
      const frontpage=function(req,res){
      res.render('bookissue', { title: 'Express' })
};
      const frontpage1=function(req,res){
      res.render('bookissue', { title: 'Express' })
};
      const upload1=function(req,res){
      res.render('upload', { title: 'Express' })
};

      const userTeacher=function(req,res){
      res.render('user', { title: 'Express' })
};
   module.exports ={ bringo, user, usertype, record, login, userTeacher, forget, admin, teacher, student, library_staff, alumni, formpage,
                     upload, formpage1, frontpage, frontpage1, upload1, signup,
                   };
