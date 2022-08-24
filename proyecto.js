const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


$(function(){

  var model = {
      init: function() {
          if (!localStorage.question) {
              localStorage.question = JSON.stringify([]);
          }
      },
      add: function(obj) {
          var data = JSON.parse(localStorage.question);
          data.push(obj);
          localStorage.question = JSON.stringify(data);
      },
      getAllNotes: function() {
          return JSON.parse(localStorage.question);
      }
  };


  var octopus = {
      addNewNote: function(questionStr) {
          model.add({
              content: questionStr
          });
          view.render();
      },

      getNotes: function() {
          return model.getAllNotes();
      },

      init: function() {
          model.init();
          view.init();
      }
  };


  var view = {
      init: function() {
          this.noteList = $('#question');
          var newNoteForm = $('#p-holder');
          var newNoteContent = $('#pholder');
          newNoteForm.submit(function(e){
              octopus.addNewNote(newNoteContent.val());
              newNoteContent.val('');
              e.preventDefault();
          });
          view.render();
      },
      render: function(){
          var htmlStr = '';
          octopus.getNotes().forEach(function(question){
              htmlStr += '<p> HOLA </p>'+ 
              '<button type="button" class="question-btn">'+
              '<span class="plus-icon">'+
                  '<i class="far fa-plus-square"></i>'+
              '</span>'+
              '<span class="minus-icon">'+
                  '<i class="far fa-minus-square"></i>'+
              '</span>'+
          '</button>'+
      '</div>'+

      '<div class="question-text">'+
          '<p>aios</p>'+
      '</div>';
          });
          this.noteList.html( htmlStr );
      }
  };

  octopus.init();
});
