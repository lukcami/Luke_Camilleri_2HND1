#pragma strict

var bonus_2:Rigidbody;

function createBONUS2()
{
	var xposition:int;
	var yposition:int;
	
	yposition = Random.Range (2,2.3);
	
	xposition = transform.position.x + xposition;
	
	Instantiate(bonus_2,Vector3(xposition,yposition,0),Quaternion.identity);
}

function Start () {
	InvokeRepeating("createBONUS2",8.0,5.0);
}

function Update () {

}