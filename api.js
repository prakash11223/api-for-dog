function RandomDogimage() {
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
    xhrRequest.send();
    xhrRequest.onload = function() {
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response)
        var imageUrl = responseJSON.message;
        $("#dog-image").attr('src', imageUrl);
    };



}
$("#fetch-buttom").click(RandomDogimage)