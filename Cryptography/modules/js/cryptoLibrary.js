/*****************************************************************
*     Name    : Encrypt
*     Author  : Kony
*     Purpose : To encrypt the user text and display the encrypted text.
******************************************************************/

function Encrypt()
{
	try
	{
		var algo="aes";
		if(kony.os.deviceInfo().name == "blackberry")
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});
		else
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});

		if (frmCrypto.textEncrypt.text == "" || frmCrypto.textEncrypt.text ==null)
		{
			frmCrypto.lblEncrypt.text =  "Please enter the text to encrypt";
			return;
		}
		
		else
		{
			var inputstr=frmCrypto.textEncrypt.text;
		}
		
		var prptobj={padding:"pkcs5",mode:"cbc",initializationvector:"1234567890123456"};

		var myEncryptedTextRaw = kony.crypto.encrypt(algo,encryptDecryptKey,inputstr,prptobj);
		var myEncryptedText  = kony.convertToBase64(myEncryptedTextRaw);
		
		if(kony.os.deviceInfo().name == "Windows 8")
		{
			frmCrypto.lblEncrypt.text = "Encrypted text = "+myEncryptedTextRaw.toString();
		}
		else
		{
			frmCrypto.lblEncrypt.text = "Encrypted text = "+myEncryptedText.toString();
		}
					
	}
	catch(err)
	{
		alert(typeof err);
		alert("Error in callbackEncryptAes : "+err );
	}
}
 
/*****************************************************************
*     Name    : decrypt
*     Author  : Kony
*     Purpose : To decrypt the encrypted text and display the decrypted text.
******************************************************************/
 
function decrypt()
{
	try
	{
		var algo="aes";
		
		if(kony.os.deviceInfo().name == "blackberry")
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});
		else
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});

		var prptobj= {padding:"pkcs5",mode:"cbc",initializationvector:"1234567890123456"};
		
		
		if (frmCrypto.textEncrypt.text == "" || frmCrypto.textEncrypt.text ==null || frmCrypto.lblEncrypt.text == "" ||frmCrypto.lblEncrypt.text ==null || frmCrypto.lblEncrypt.text == "Please enter the text to encrypt")
		{
			frmCrypto.lblEncrypt.text ="";
			frmCrypto.lblDecrypt.text ="Please encrypt and then try decrypt."
			return;
		}
		else
		{
			var inputstr=frmCrypto.textEncrypt.text;
		}
		
		var myEncryptedTextRaw = kony.crypto.encrypt(algo,encryptDecryptKey,inputstr,prptobj);
		var myClearText = kony.crypto.decrypt(algo,encryptDecryptKey,myEncryptedTextRaw,prptobj);
		frmCrypto.lblDecrypt.text ="Decrypted text = "+myClearText.toString();
					
	}
	catch(err)
	{
		alert(typeof err);
		alert("Error in callbackDecryptAes : "+err );
	}
}
 



/*****************************************************************
*	Name    : createHashMD2
*	Author  : Kony
*	Purpose : To create hash value for the user text using "MD2" Algorithm.
******************************************************************/

function createHashMD2()
{
	try
    {
		var algo="md2";
		var inputstr=frmCrypto.txtMd2Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		
		alert(JSON.stringify(myHashValue));
		
		frmCrypto.lblMD2Hash.text = "Hash Value MD2 Algo: " +myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD2 : "+err );
	}
}

/*****************************************************************
*	Name    : createHashMD4
*	Author  : Kony
*	Purpose : To create hash value for the user text using "MD4" Algorithm.
******************************************************************/

function createHashMD4()
{
	try
    {
		var algo="md4";
		var inputstr=frmCrypto.txtMD4Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		
		alert(JSON.stringify(myHashValue));
		
		frmCrypto.lblMD4Hash.text = "Hash Value MD4 Algo: " +myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD4 : "+err );
	}
}

/*****************************************************************
*	Name    : createHashMD5
*	Author  : Kony
*	Purpose : To create hash value for the user text using "MD5" Algorithm.
******************************************************************/

function createHashMD5()
{
	try
    {
		var algo="md5";
		var inputstr=frmCrypto.txtMD5Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblMD5Hash.text = "Hash Value MD5 Algo: " +myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD5 : "+err );
	}
}

/*****************************************************************
*	Name    : createHashSha1
*	Author  : Kony
*	Purpose : To create hash value for the user text using "SHA1" Algorithm.
******************************************************************/

function createHashSha1()
{
	try
    {
		var algo="sha1";
		var inputstr=frmCrypto.txtSHA1Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblSHA1Hash.text = myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashSHA1 : "+err );
	}
}

/*****************************************************************
*	Name    : createHashSha256
*	Author  : Kony
*	Purpose : To create hash value for the user text using "SHA256" Algorithm.
******************************************************************/

function createHashSha256()
{
	try
    {
		var algo="sha256";
		var inputstr=frmCrypto.txtSHA256Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblSHA256Hash.text = myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashSHA256 : "+err );
	}
}

