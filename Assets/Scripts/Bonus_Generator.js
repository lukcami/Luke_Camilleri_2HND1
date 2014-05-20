#pragma strict

var bonus:Rigidbody;

function createBONUS()
{
	var xposition:int;
	var yposition:int;
	
	yposition = Random.Range (2,2.3);
	
	xposition = transform.position.x + xposition;
	
	Instantiate(bonus,Vector3(xposition,yposition,0),Quaternion.identity);
}

function Start () {
	InvokeRepeating("createBONUS",10.0,10.0);
}

function Update () {

}