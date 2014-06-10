#pragma strict
//variable
var health:Rigidbody;

function createHEALTH()
{
	var xposition:int;
	var yposition:int;
	
	yposition = Random.Range (0,2.3);
	
	xposition = transform.position.x + xposition;
	
	Instantiate(health,Vector3(xposition,yposition,0),Quaternion.identity);
}

function Start () {
	InvokeRepeating("createHEALTH",5.0,5.0);
}

function Update () {

}