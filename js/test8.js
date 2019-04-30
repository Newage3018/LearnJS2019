function deepEqual(m,n){
if (typeof(m)!==typeof(n)){// если типы разные то сравнивать дальше не стоит, возвращаем false
    return false;
}
else if (typeof(m)!='object')
    {return (m===n);}

else{
    if (m.length!=n.length)// если длинны объектов равны; 
    {
        return false;
    }
    else{
     
    let result=true;
    for (let i=0;i<m.length;i++)
        
    {
        if(m[i]===n[i]) {result=true;}
        else            {result=false;}
    
    }
    return result;
    }
    }
    }

    alert(deepEqual)(3,3);