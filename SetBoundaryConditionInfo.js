var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlV0aHAwdjVsUnpOc1lZT3VyQ3JTdmciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2OTE0NzQ5ODEsImV4cCI6MTY5MjA3OTc4MSwiaXNzIjoiaHR0cDovL2RoaWdyb3VwLmNvbSIsImF1ZCI6ImFwaTEiLCJjbGllbnRfaWQiOiJJZGVudGl0eVNlcnZlcl9BcHAiLCJzdWIiOiIzYTBjNzg3MC1lODE2LTc5ZWUtMzNkZC04NjkzYWEyYTI2ZWEiLCJhdXRoX3RpbWUiOjE2OTE0NzQ5ODEsImlkcCI6ImxvY2FsIiwibmFtZSI6Inpuanp5IiwiZ2l2ZW5fbmFtZSI6Inpuanp5IiwiZW1haWwiOiIiLCJ0ZW5hbnRJZCI6IjNhMGM3ODcwLWU3ZmUtZWE2MS1lYjAxLTBkNmQyYmYwZTA0NSIsInJvbGUiOiJ0ZW5hbnRfYWRtaW4iLCJyb2xlX25hbWUiOiLnrqHnkIblkZgiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiYXBpMSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJjdXN0b20iXX0.ACxAuIWqHvR7Az0YUdXl6RbYhGctMVTm18_8sSbbxqkSiCosg81cZ7PTf9dT-e-iiRrJ_Shx8CibZ-f1UpH3xFz-OtowNXE-6q3rIg50hPFlwoaxN-WPsgpZ46OoxKc_BKvKMRyidvpnBikgZqQ9mFz7w0YjV_JWIcoX8pKnCEATsxiH8-C3KH1-4P-w0BTeXhSXJWSJUo4Xq5kGc12HWghzpL7HR3ySqeZ2Hp2AfQVYwQlkRjyw4vUYSfhxF_nqsX6PFgVaBQ3u0BnAK2AHBrzJMWzjbc74j8--pABqf8I2QMChc5Yl06J-paK2yw9p4PfV9eE1-BeG8jpCauDBKA");
myHeaders.append("tenantId", "3a0c7870-e7fe-ea61-eb01-0d6d2bf0e045");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
   "ModelFile": "E:\\DevCoreService\\2023\\TestModel\\2DBlueBeach\\100y_combined.mupp",
   "Boundarys": [
      {
         "BoundaryID": "Rainfall",
         "BoundaryType": 1,
         "ApplyBoundary": true,
         "ConnectionType": 1,
         "ListName": "RiverCatchments",
         "CatchmentID": null,
         "VariationType": 3,
         "ConstantValue": null,
         "TSFileName": "E:\\DevCoreService\\2023\\TestModel\\2DBlueBeach\\100year_rainfall.dfs0",
         "TSItemName": "Precipitation",
         "TSData": [
            {
               "DT": "2007-01-01 00:00:00",
               "Value": 0
            },
            {
               "DT": "2007-01-01 00:01:00",
               "Value": 5.913869
            },
            {
               "DT": "2007-01-01 23:59:00",
               "Value": 6.957493
            },
            {
               "DT": "2007-01-02 00:00:00",
               "Value": 6.957493
            }
         ]
      }
   ]
});

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw
};

fetch("https://online-products.dhichina.cn/devcore/dev-core-demo-service-mpflood/api/RainfallRunoff/SetBoundaryConditionInfo", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));