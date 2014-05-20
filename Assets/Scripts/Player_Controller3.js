#pragma strict
//declare an animator object
private var anim:Animator;

var style:GUISkin;

static var score:int;
static var lives:int;

function OnGUI()
{
	GUI.skin = style;

	GUI.contentColor = Color.black;
	
	GUI.Label(Rect(10,5,100,50), "Score: " +score);
	
	GUI.Label(Rect(110,5,100,50),"Lives: " +lives);
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="enemy_1" || other.gameObject.tag == "enemy_2" || other.gameObject.tag == "enemy_3")
	{
		lives--;
		
		Destroy(other.gameObject);
		
		if (lives <= 0)
		{
			Application.LoadLevel("Menu");
			Destroy(this.gameObject);
		}
	}
	else if (other.gameObject.tag=="health")
	{
		lives++;
		
		Destroy(other.gameObject);
	}
	else if (other.gameObject.tag=="bonus")
	{
		score +=10;
		
		Destroy(other.gameObject);
	}
}

function Start () {
	//get the animation component of the player at the START of the game
	anim = GetComponent(Animator);
	transform.position.x = -5;
	lives = 10;
	score=0;
}

function Update () {

	//move player left and right
	transform.Translate(Vector3.right * 2 * Input.GetAxis("Horizontal") * Time.deltaTime);

	//by default, stay in idle state
	anim.SetInteger("WalkLeft",0);
	anim.SetInteger("WalkRight",0);
	
	//pressing left arrow moves the character to the left
	if (Input.GetAxis("Horizontal") < 0)
	{
		anim.SetInteger("WalkLeft",1);
		
	}
	
	if (Input.GetAxis("Horizontal") > 0)
	{
		anim.SetInteger("WalkRight",1);
		
	}
 	if (score>100)
	 {
	 	Application.LoadLevel("Menu");
	 }
}