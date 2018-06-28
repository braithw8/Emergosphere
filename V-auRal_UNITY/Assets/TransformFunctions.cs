using UnityEngine;
using System.Collections;

public class TransformFunctions : MonoBehaviour
{
    public float moveSpeed = 10f;
    public float turnSpeed = 50f;
    public float horizontalSpeed = 2.0F;
    public float verticalSpeed = 2.0F;

    public float thrust;
    public Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void FixedUpdate()
    {
        rb.AddRelativeForce(Vector3.forward * thrust);
    }


    void Update()
    {

        //if (Input.GetKey(KeyCode.UpArrow))
        //    transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);

        //if (Input.GetKey(KeyCode.DownArrow))
        //    transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);

        //if (Input.GetKey(KeyCode.LeftArrow))
        //    transform.Rotate(Vector3.up, -turnSpeed * Time.deltaTime);

        //if (Input.GetKey(KeyCode.RightArrow))
        //    transform.Rotate(Vector3.up, turnSpeed * Time.deltaTime);

      


        float h = horizontalSpeed * Input.GetAxis("Horizontal");
        float v = verticalSpeed * Input.GetAxis("Vertical");

      
                        

        if (Input.GetButton("Fire3"))
        {
            transform.Rotate(0, v, h);
            Debug.Log("Fire3");

        }
        if (!Input.GetButton("Fire3"))
        {
            transform.Rotate(v, h, 0);
        }

        if (Input.GetButton("Fire1"))
        {
            thrust = 1f;
            Debug.Log("Fire1");
        }
    
        else if (Input.GetButton("Fire2"))
        {
            thrust = -1f;
            Debug.Log("Fire2");

        }
        else
        {
            thrust = 0f;
        }


    }
}