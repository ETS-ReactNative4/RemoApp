import * as actionTypes from './actionTypes';

export function signIn(userDic, username) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.USER_SIGN_IN,
      user: {
        userName: username,
        Session: userDic.Session,
        attributes: userDic.attributes,
        authenticationFlowType: userDic.authenticationFlowType,
        client: userDic.client,
        keyPrefix: userDic.keyPrefix,
        pool: userDic.pool,
        storage: userDic.storage,
        userDataKey: userDic.userDataKey,
      },
    });
  };
}
export function signOut() {
  return function(dispatch) {
    dispatch({
      type: actionTypes.USER_SIGN_OUT,
      user: {},
    });
  };
}

/*
{"Session": null,
 "attributes": {"email": "17785923961@163.com", "email_verified": true, "phone_number": "+8617785923961",
                "phone_number_verified": false, "sub": "34b0cd37-90d7-44cc-aec8-1fefb73e5c44"},
 "authenticationFlowType": "USER_SRP_AUTH",
 "client": {"endpoint": "https://cognito-idp.us-east-1.amazonaws.com/", "fetchOptions": {}},
 "keyPrefix": "CognitoIdentityServiceProvider.2gva47ouifsk32t0igb4g9cv3d",
 "pool": {"advancedSecurityDataCollectionFlag": true,
          "client": {"endpoint": "https://cognito-idp.us-east-1.amazonaws.com/", "fetchOptions": [Object]},
          "clientId": "2gva47ouifsk32t0igb4g9cv3d", "storage": [Function MemoryStorage],
          "userPoolId": "us-east-1_rk8cexv21"}, "preferredMFA": "NOMFA", "signInUserSession": {"accessToken": {
    "jwtToken": "eyJraWQiOiJheG42THlhbWxqSXloZXczbGVHU3hhUFNVYW96WDlGMFVIUkNjTklFMGxRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzNGIwY2QzNy05MGQ3LTQ0Y2MtYWVjOC0xZmVmYjczZTVjNDQiLCJldmVudF9pZCI6Ijg4YTMyZTk4LWY1NmQtNDQ3YS1hN2JlLTIwNDI2NzVlMzhiMCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1OTg1ODYzNjUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3JrOGNleHYyMSIsImV4cCI6MTU5ODU4OTk2NSwiaWF0IjoxNTk4NTg2MzY1LCJqdGkiOiIxODNjZjgxNi01NzlmLTRlOTktYWJmZi1mMjhiMjc3ZTkzZDgiLCJjbGllbnRfaWQiOiIyZ3ZhNDdvdWlmc2szMnQwaWdiNGc5Y3YzZCIsInVzZXJuYW1lIjoiaWFtbGp5YSJ9.DJf4iP5NzBjHg355pIMky1XAL3DyES0DEeZRqNoMCWq8fYNhYtyCHD4CZs86KmI-1SeUgPTSFPAduEhjDREh6988iqYfixUpB7mwhG1nGVa5HXJVvrmLbbwjqwgmeAV0smz8Zb5bLU-RdCvEE_wvHLeskmOO6AsruYj_1mKPgRUBW9SthJi5Cu7UUawTcKnbccWaC97GKlvRykfipuCX0PEgxazLsu4MvYp9Mcz6oxex90MTiFgpNeYtpMzMmQHFcS9uzDMHlSsEF5OftBXwvzQWPTWPQ5oxDG34q53SPAo93oEt_s57ESrg4tsS6MC2b00oV5nsBKqFEJUdML1oRg",
    "payload": [Object]}, "clockDrift": 0, "idToken": {
    "jwtToken": "eyJraWQiOiJOUG5kalZsXC9hSTczTG5cLzNjQmZ5XC9ZUGdKb2x6cXV2UzMyYTVWZFwvOFwvQnM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGIwY2QzNy05MGQ3LTQ0Y2MtYWVjOC0xZmVmYjczZTVjNDQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfcms4Y2V4djIxIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImlhbWxqeWEiLCJhdWQiOiIyZ3ZhNDdvdWlmc2szMnQwaWdiNGc5Y3YzZCIsImV2ZW50X2lkIjoiODhhMzJlOTgtZjU2ZC00NDdhLWE3YmUtMjA0MjY3NWUzOGIwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1OTg1ODYzNjUsInBob25lX251bWJlciI6Iis4NjE3Nzg1OTIzOTYxIiwiZXhwIjoxNTk4NTg5OTY1LCJpYXQiOjE1OTg1ODYzNjUsImVtYWlsIjoiMTc3ODU5MjM5NjFAMTYzLmNvbSJ9.bmrXZ4_l3M8N-DsTT70xlWavt1MZ-NUzZ5iipJPH7yPu0TCuK3BGYd4-Ncpc8C-vUBdIFh83f139oRn2gJbmKrjYv_Hs_k-MPpkMNkDKiK4iN8YqROrs-LnGpzd2ZECE5C70fR6u_y5yWH3QUxdTBS2Lv9HNo_itLHcTx07V8saoA9CFvGLbOG-GEua8-prr3p9uEphfAllXuC8HDVUiKFwFAN5lNfbGcmbIf3BLYf89-w0ciK-kGZPeNvQHSV1Scq9h7FDriqHPiYhRUy-mo_R0FeWfmq8qZ29w0OyfSByDcnnQK597Q-TJPxf2YdvMHZ6pQVXhZbhkFYvgRSVn6w",
    "payload": [Object]}, "refreshToken": {
    "token": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.PNOORbY8omf2rSV8UOy3iuCTfnFIlt_HJYelE0TgYZQyOL9o3Zz6DO6nonxXPea0iiAjUok5n8lO8xWAiRsSyKHZ9YRwT9iEcugwnMQqzcQ9k_l_o_wEtyVXHjz3pAto3QCBy5iNQzgXDzin-OfirOQ4vyyL_RiKs3Qpa6qM4svT0FHcRBfFtOz77SzL8RhAUhwj0t3nMiF0drxWnmL0wZqAR00wGw4PRZ64Jmwh2gk1jPvaUdjXmA698xqTUZz1S_U3BUC8mEAW4JdL2RpJfGbdPUyS-SmJtHdrqqDMFJuvhjP-pfboTtRGSnAAnVKDFWQVgygfOVn6pNSnxlwVlg.bBOsr0IvNAQYlmhI.YO84UNypF15vAhHmkf3Fm5gx9FpT4fZEoDTB_khGVaqxi6S8t2CBGZLEt9RCrZ2IVrvyfDPKJXXyBK24H5WzsvM4MNPQkVRlLx_zP80qmKNdVWhft7cpnkB1kIgX2eCElPzOEiOWZPg4QHvmSgaVqyr2NyTQ6H7TPOJTJTDRzG6f7XEHbXuRKQShEa-waadd6SaAM1SXkynepws2Sc1XPnVtCcsjRjY5BRyTX3BfEdezn_w_UMZGq7jg7u17gQvAv1t2F9uRNXyI7mHIZbwl4VPNyGnJHDSSVafhgEsrEa7AB5ki8ZI__A6xa_zVkiJHEblc8j0cK0MSwU7aMQdFeV5XZqyHARm9XktLzgXexCQdRKwnHCXQnJg6wsuF9aQrjxbO9WQLpUdo2LibVc6gmZ-zbuxJwm74-CKaCzQei5mTCgGIcD4CNqyBEkmnY-EOhCGb67mhKBjOH815LWg-3CX6TLea_yZT7DMIQOPALwEyN7rd7Mr83pmZHG_ZxHpHpWuheDMDuvSG62jxrY_tQs2Vj9a6DFfcZp1wCxm5s2-Q2EY6PuQk_jbDQUKvQZFrJ7lPaKiHvSJs9hlSXnC0q0FEdldLUy9bF9HfyVRMLTKq-t04grGXs00NoBMSQmE9X_FNWYWOEsa7OWzX-pH-wYvH78QUb1w5MN59HgFxysTGpcsWppYNuUHfJ7RHymTFDXoPqapRRiftxAwkK0co__VhnIdsbonx9RxxKcw3q3n-FUXbUaH6h4UZ-g99aK-X9xDVSUl8yGnVpOavBKOhN1EXUJeLCy4bxlsdxtx2V-hmUYmkwYbmMFadudkFJO5HI37zEYGH9y8ZZTj9RK7fc8E841ZpA2ANmUDQjVN_Lna7bfC-A5uW38oMNf1-fIATDw7IpPFD1UJ6qFLxegYZc0dC8gPtMRGuaiAoKL6AXrlWP4SNdiSSRpdKt9vnKwRoDBouX4Zs3slmNWsLy6ETKGlFms2VlbWfF7WxAZFDRicpI_p3DRThWCjdWzq2NBCnqWwX-gdYSOK74n9oUOKmf4EBSWi4oMD7NTR3sFnsg-QOUHlu8C9cPlSU4FYw7bciygtxyIYgRVIsgsyrecICsbSUcZymWp0Ug3YrrbkKyUU53mjjfC3negi2F3xeaAlEnRxSqiooqy_gr-OrDE3_FbjDCMWMyV7M__qBuDftLRVx255QpAu3wJtdLNsa-qN2XdbY6Qjw_Ic8UtvNct3-U-g_ScVQ7DWB0Dj57yPd2kpRq-jtgAesMg8nJdvZ9e3gXyQnEezU.IMglEJsvUIhlYs9h2sMlKQ"}},
 "storage": [Function MemoryStorage],
 "userDataKey": "CognitoIdentityServiceProvider.2gva47ouifsk32t0igb4g9cv3d.iamljya.userData", "username": "iamljya"}
*/
