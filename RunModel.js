var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlV0aHAwdjVsUnpOc1lZT3VyQ3JTdmciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2OTE0NzQ5ODEsImV4cCI6MTY5MjA3OTc4MSwiaXNzIjoiaHR0cDovL2RoaWdyb3VwLmNvbSIsImF1ZCI6ImFwaTEiLCJjbGllbnRfaWQiOiJJZGVudGl0eVNlcnZlcl9BcHAiLCJzdWIiOiIzYTBjNzg3MC1lODE2LTc5ZWUtMzNkZC04NjkzYWEyYTI2ZWEiLCJhdXRoX3RpbWUiOjE2OTE0NzQ5ODEsImlkcCI6ImxvY2FsIiwibmFtZSI6Inpuanp5IiwiZ2l2ZW5fbmFtZSI6Inpuanp5IiwiZW1haWwiOiIiLCJ0ZW5hbnRJZCI6IjNhMGM3ODcwLWU3ZmUtZWE2MS1lYjAxLTBkNmQyYmYwZTA0NSIsInJvbGUiOiJ0ZW5hbnRfYWRtaW4iLCJyb2xlX25hbWUiOiLnrqHnkIblkZgiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiYXBpMSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJjdXN0b20iXX0.ACxAuIWqHvR7Az0YUdXl6RbYhGctMVTm18_8sSbbxqkSiCosg81cZ7PTf9dT-e-iiRrJ_Shx8CibZ-f1UpH3xFz-OtowNXE-6q3rIg50hPFlwoaxN-WPsgpZ46OoxKc_BKvKMRyidvpnBikgZqQ9mFz7w0YjV_JWIcoX8pKnCEATsxiH8-C3KH1-4P-w0BTeXhSXJWSJUo4Xq5kGc12HWghzpL7HR3ySqeZ2Hp2AfQVYwQlkRjyw4vUYSfhxF_nqsX6PFgVaBQ3u0BnAK2AHBrzJMWzjbc74j8--pABqf8I2QMChc5Yl06J-paK2yw9p4PfV9eE1-BeG8jpCauDBKA");
myHeaders.append("tenantId", "3a0c7870-e7fe-ea61-eb01-0d6d2bf0e045");

var requestOptions = {
   method: 'GET',
   headers: myHeaders
};

fetch("https://online-products.dhichina.cn/devcore/dev-core-demo-service-mpflood/api/Basic/RunModel?modelFile=E:\\DevCoreService\\2023\\TestModel\\2DBlueBeach\\100y_combined.mupp", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));