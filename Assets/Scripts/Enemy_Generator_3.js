#pragma strict

var enemy_3:Rigidbody;

function createEnemy()
{
	var xposition:int;
	var yposition:int;
	
	xposition = Random.Range (2,6);
	yposition = Random.Range (-3,-4);
	
	xposition = transform.position.x + xposition;
	
	Instantiate(enemy_3,Vector3(xposition,yposition,0),Quaternion.identity);
}

function Start () {
	InvokeRepeating("createEnemy",0.5,1.0);
}

function Update () {

}