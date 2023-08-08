var myHeaders = new Headers();
myHeaders.append("tenantId", "3a0c7870-e7fe-ea61-eb01-0d6d2bf0e045");

var formdata = new FormData();
formdata.append("client_id", "IdentityServer_App");
formdata.append("grant_type", "password");
formdata.append("client_secret", "955q2w3e*");
formdata.append("username", "znjzy");
formdata.append("password", "znjzy0718");
formdata.append("tenantId", "3a0c7870-e7fe-ea61-eb01-0d6d2bf0e045");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata
};

fetch("https://online-products.dhichina.cn/devcore/identity-service/connect/token", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result.access_token))
  .catch(error => console.log('error', error));