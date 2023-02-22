const API_KEY="28cac52468e7b16b9115be5fc0bd505d";

$(function(){
  $('#btn').on('click', function(){
    $.ajax({
      // 入力された都市名でWebAPIに天気予報をRQする
      url: "https://api.openweathermap.org/data/2.5/weather?q="+$('#cityname').val()+"&units=metric&appid="+"28cac52468e7b16b9115be5fc0bd505d",
      dataType: 'jsonp',
      // 通信成功
    }).done(function(data){
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
      // 通信失敗
    }).fail(function(data){
      alert('通信に失敗しました');
    });
  });
});