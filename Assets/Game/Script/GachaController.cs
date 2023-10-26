using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GachaController : MonoBehaviour
{
    [SerializeField] private Transform transformLeft;
    [SerializeField] private Transform transformRight;
    [SerializeField] private Transform arrow;
    public void Start()
    {
        Rotate();
    }
    public void Rotate()
    {
        arrow.transform.MyDoRotate(this, transformLeft,10);
    }    


}
