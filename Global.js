basicURL = "http://one-click-dev.herokuapp.com/api/";
FBAppID = "114114968758920";
enableFacebook = false;
enableMobile = false;
initializeFacebook();
appLunched = true;
userID = '';
userEmail = '';

//userID = '100001751826481';
//userEmail = 'jeff@kaufmaninternational.com';
pushToken = '';
//userID = '100002930556199';
//userEmail = 'icbsoft87@gmail.com';
userID = '100002155501991'
userEmail = 'leonardo.redmond@gmail.com';


userName = ''
userAvatar = '';
userPhone = '';
userCarrier = '';
accessToken = '';

badgeNumber = '';

activeCampaigns = [];
inactiveCampaigns = [];
successCampaigns = [];
unsuccessCampaigns = [];
isPhoneGap = true;
push = undefined;
pageAvatar = undefined;
pageTitle = undefined;
percentChanges = [];
postChanges = [];
scores = [];
pxSize = 0;
localDB = undefined;

function getUserInformation(){
    var response = Ext.Ajax.request({
        method: "GET",
        async : false,
        headers: {
            'Authorization' : 'Token ' + accessToken
        },
        url: basicURL + "user-info/.json",
        withCredentials: true,
        useDefaultXhrHeader: false   
    });
    
    response = Ext.decode(response.responseText);
    if (response.constructor === String){
        alert(response);
        return false;
    }
    if (response.detail){
        alert(response.detail);
        return false;
    }
    if (response.profile_picture){
        userAvatar = response.profile_picture;        
        userPhone = response.phone;
        userCarrier = response.carrier;
        pageTitle = response.page_name;
        pageAvatar = response.page_picture;
        
        return true;
    }
    return false;
    
}
function avatarImageLoaded(){
    Ext.Viewport.setMasked(false);  
}
function getCampaignList(){

}
function getDefaultFontSize(pa){
 pa= pa || document.body;
 var who= document.createElement('div');

 who.style.cssText='display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em';

 who.appendChild(document.createTextNode('M'));
 pa.appendChild(who);
 var fs= [who.offsetWidth, who.offsetHeight];
 pa.removeChild(who);
 return fs;
}

function getCampaignDetail(campaignID){    
    var record,prevRecord, recID, mLikes,cLikes,mComments,cComments, timeAxis,actions,
        prevMLikes, prevCLikes, prevMComments, prevCComments, 
        dMLikes, dCLikes, dMComments, dCComments, 
        percentChangeRecord, postRecord, scoreRecord;
    percentChanges = [];
    postChanges = [];
    scores = [];
    
    var response = Ext.Ajax.request({
        method : "GET",
        async : false,
        headers: {
            'Authorization' : 'Token ' + accessToken
        },
        url: basicURL + "campaign/records/" + campaignID +"/.json",
        withCredentials: true,
        useDefaultXhrHeader: false
    });
     
    response = Ext.decode(response.responseText);
    
    if (response.length > 0){
        for (var i = 0; i < response.length; i++){
            record = response[i];            
            mLikes = record.my_likes;
            mComments = record.my_comments;
            cLikes = record.competitor_likes;
            cComments = record.competitor_comments;            
            timeAxis = record.created_at;
            
            if (i > 0){
                prevRecord = response[i-1];
                prevMLikes = prevRecord.my_likes;
                prevMComments = prevRecord.my_comments;
                prevCLikes = prevRecord.competitor_likes;
                prevCComments = prevRecord.competitor_comments;                
            } else {
                prevRecord = response[i];
                prevMLikes = prevRecord.my_likes;                
                prevMComments = prevRecord.my_comments;
                prevCLikes = prevRecord.competitor_likes;
                prevCComments = prevRecord.competitor_comments;
            }
            if (prevMLikes == 0)
            {
                dMLikes = 1;
            }else{
                dMLikes = prevMLikes;
            }
            if (prevMComments == 0)
            {
                dMComments = 1;
            }else{
                dMComments = prevMComments;
            }
            if (prevCLikes == 0)
            {
                dCLikes = 1;
            }else{
                dCLikes = prevCLikes;
            }
            if (prevCComments == 0)
            {
                dCComments = 1;
            }else{
                dCComments = prevCComments;
            }
            actions = mLikes + mComments;
            var year = timeAxis.substring(2,4);
            var month = timeAxis.substring(5,7);
            var day = timeAxis.substring(8,10);
            var hour = timeAxis.substring(11,13);
            var mins = timeAxis.substring(14,16);
            timeAxis = month + "/" + day  +"/" + year +" " + hour + ":" + mins;
            percentChangeRecord = {
                timeaxis : timeAxis,
                mylikes : ((mLikes / dMLikes) * 100).toFixed(2),
                mycomments : ((mComments / dMComments) * 100).toFixed(2),
                cmplikes : ((cLikes / dCLikes) * 100).toFixed(2),
                cmpcomments : ((cComments / dCComments) * 100).toFixed(2),
            };            
            postRecord = {
                timeaxis : timeAxis,
                mylikes : mLikes,
                mycomments : mComments,
                cmplikes : cLikes,
                cmpcomments : cComments,
            };
            scoreRecord = {
                timeaxis : timeAxis,
                likes : mLikes,
                comments : mComments,
                shares : 'X',
                actions : actions,
                score : 'X'
            };
            percentChanges.insert(0,percentChangeRecord);
            postChanges.insert(0,postRecord);
            scores.insert(0, scoreRecord);
        }
    }
}
function savePushToken(){
    if (isPhoneGap){
        if (accessToken != '' && pushToken != '' ){
            Ext.Ajax.request({
            method: "POST",
            url: basicURL + "uaRegister/",
            headers: {
                'Authorization' : 'Token ' + accessToken
            },
            withCredentials: true,
            useDefaultXhrHeader: false,
            params: {
                push_token: pushToken
            },
            success: function(response){
                //alert("success")
            },
            failure: function(response){
                //alert("Failure")
            }
        });

        }

    }
}

function resetBadgeNumber(){
    if (enableMobile){
        push.resetBadge();
        badgeNumber = '';    
    }
    
}
function initializePushNotification(){

        push = window.plugins.pushNotification
        push.isPushEnabled(function (has_push) {
            if (has_push){
                push.registerEvent('registration', function (error, id) {
                    if (error) {
                        console.log('There was an error registering for push notifications.');
                    } else {
                        console.log("Registered with ID: " + id);
                    } 
                });
                push.getPushID(function (id){
                    pushToken = id;
                    savePushToken();
                });               
            }
        })

}

function initializeFacebook(){
    if (enableFacebook){
        if ((typeof cordova == 'undefined') && (typeof Cordova == 'undefined')) alert('Cordova variable does not exist. Check that you have included cordova.js correctly');
        if (typeof CDV == 'undefined') alert('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');
        if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');
        
        document.addEventListener('deviceready', function() {
                                  try {
                                    db = window.openDatabase("oneclickdb", "1.0", "oneclickdb", 1000000);
                                    db.transaction(populateDB, errorCB, successCB);
                                    db.transaction(queryDB, errorCB);
                                    FB.init({ appId: FBAppID, nativeInterface: CDV.FB, useCachedDialogs: false });
                                    initializePushNotification();
                                  
                                  } catch (e) {
                                  alert(e);
                                  }
                                  }, false);

    }else{
        if (enableMobile){
            document.addEventListener('deviceready', function() {      
            initializePushNotification();      
            try {
                db = window.openDatabase("oneclickdb", "1.0", "oneclickdb", 1000000);
                db.transaction(populateDB, errorCB, successCB);
                Ext.create('OneClick.view.MainContainer', {fullscreen: true});
            } catch (e) {
                alert(e);
            }
            }, false);    
        } else {
            //Ext.create('OneClick.view.MainContainer', {fullscreen: true});
        }
        
    }
}

 function logoutDB(tx) {        
         tx.executeSql('DELETE FROM USER_INFO');        
    }

 function removeUserInfo(){
    db.transaction(logoutDB, errorCB, successCB);
 }

function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS USER');
    tx.executeSql('CREATE TABLE IF NOT EXISTS USER_INFO (id unique, userid, useremail, username)');
}

function storeUserInfo(){
    //alert('INSERT INTO USER_INFO (id, userid, useremail, username) VALUES (1, "' + userID + '", "' + userEmail + '", "' + userName + '")');
    
    db.transaction(insertUserDB, errorCB, successCB);

}

function insertUserDB(tx) {
    //alert('INSERT INTO USER_INFO (id, userid, useremail, username) VALUES (1, "' + userID + '", "' + userEmail + '", "' + userName + '")');
    tx.executeSql('DELETE FROM USER_INFO');      
    tx.executeSql('INSERT INTO USER_INFO (id, userid, useremail, username) VALUES (1, "' + userID + '", "' + userEmail + '", "' + userName + '")');
}
function errorCB(err) {
    alert("Error processing SQL: "+err);
}

function successCB() {
    
}

function queryDB(tx) {
    tx.executeSql('SELECT * FROM USER_INFO', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    // this will be true since it was a select statement and so rowsAffected was 0
    var len = results.rows.length;
    //alert(len);
    if (len > 0 ){
    for (var i=0; i<len; i++){
            userID = results.rows.item(i).userid;
            userEmail = results.rows.item(i).useremail;
            userName = results.rows.item(i).username;            
            //alert(pushToken);
            //alert("Row = " + i + " ID = " + Ext.encode(results.rows.item(i)));
        }
    } else {
        userID = undefined;
        userEmail = undefined;
        userName = undefined;
    }
    Ext.create('OneClick.view.MainContainer', {fullscreen: true});
    
}

function loginFacebook(){
    if (enableFacebook){
    FB.login(
             function(response) {
             if (response.authResponse) {
                FB.api('/me', function(response) {
                    userName = response.name;
                    userID = response.id;
                    userEmail = response.email;
                       alert(userEmail);
                    });
             }
             
             },
             { scope: "email" }
             );
    }
}
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    num = Math.floor(num / 100).toString();
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ','
                + num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + '$ ' + num /*+ '.' + cents*/);
}