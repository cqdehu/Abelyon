$(document).ready(function() {
    $("#start_btn").click(function() {
      var set_operation = $("#set_operation option:selected").val();
      var set_level = $("#set_level option:selected").val();
      var set_difficulty = $("#set_difficulty option:selected").val();
      Cookies.set("operation", set_operation, { expires: 1 })
      Cookies.set("level", set_level, { expires: 1 })
      Cookies.set("difficulty", set_difficulty, { expires: 1 })

      console.log(`Operation: ${set_operation}, Level: ${set_level}, Difficulty: ${set_difficulty}`);

      var url = "/main.html"  

      window.location.href = url
    });
  });
  