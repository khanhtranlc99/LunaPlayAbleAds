using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Gks;
using Luna.Unity;

public class PlayerController : MonoBehaviour
{
    public Animator animator;
    public Transform targetPosition; // Trường này cho phép bạn kéo và thả vị trí mục tiêu vào từ trình biên tập Unity
    public Transform fisrtPossition;

    

    private void Start()
    {
        
    }
    private void Update()
    {

        if (Input.GetMouseButton(0))
        {
            Move();
        } 
            

    }

   
    private void Move()
    {
     
        this.transform.MyDoMove(this, targetPosition, 10, delegate {
            MyDoTween.isMoving = false;

            StartCoroutine(HandleActionPlayAndWait(animator , "Punch3", delegate {

                animator.Play("Idle 2");
                this.transform.MyDoMove(this, fisrtPossition, 15, delegate { });
            }));
      
       

        });
    }    

    public void Kick()
    {
        animator.Play("Kick3");
    }
    public void Punch()
    {

        animator.Play("Punch3");

       
    }
    public static IEnumerator HandleActionPlayAndWait(Animator animator, string param, Action callBack)
    {
        yield return animator.PlayAndWait(param);
        callBack?.Invoke();
    }
     
}
