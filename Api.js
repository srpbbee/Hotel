export default function() {
  return fetch("https://raw.githubusercontent.com/srpbbee/Hotel/master/hotel.json")
  .then(function (res) {
    return res.json();
    console('cannn pullll dataaaaa')
  })
  .catch(function(error) {
    console.log('bbeeeeee');
    throw error;
  });
}
