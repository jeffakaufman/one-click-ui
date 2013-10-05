basicURL = "http://one-click-dev.herokuapp.com/api/";
FBAppID = "114114968758920";
enableFacebook = false;
initializeFacebook();

userID = '100002930556199';
userName = ''
userEmail = 'icbsoft87@gmail.com';
userAvatar = '';
userPhone = '';
userCarrier = '';
accessToken = '';

activeCampaigns = [];
inactiveCampaigns = [];
successCampaigns = [];
unsuccessCampaigns = [];

percentChanges = [];
postChanges = [];
scores = [];

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
    
    if (response.detail){
        alert(response.detail);
        return false;
    }
    if (response.profile_picture){
        userAvatar = response.profile_picture;
        userPhone = response.phone;
        userCarrier = response.carrier;
        return true;
    }
	return false;
    
}

function getCampaignList(){

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
                mylikes : (((mLikes - prevMLikes) / dMLikes) * 100).toFixed(2),
                mycomments : (((mComments - prevMComments) / dMComments) * 100).toFixed(2),
                cmplikes : (((cLikes - prevCLikes) / dCLikes) * 100).toFixed(2),
                cmpcomments : (((cComments - prevCComments) / dCComments) * 100).toFixed(2),
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

function initializeFacebook(){
    if (enableFacebook){
        if ((typeof cordova == 'undefined') && (typeof Cordova == 'undefined')) alert('Cordova variable does not exist. Check that you have included cordova.js correctly');
        if (typeof CDV == 'undefined') alert('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');
        if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');
        
        document.addEventListener('deviceready', function() {
                                  try {
                                  FB.init({ appId: FBAppID, nativeInterface: CDV.FB, useCachedDialogs: false });
                                  
                                  } catch (e) {
                                  alert(e);
                                  }
                                  }, false);

    }
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