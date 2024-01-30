#include <iostream>
#include <string>
using namespace std;
/*Difference in Pointer 7 References
references need to be initialised however pointers need not to be initialize we can have pointer with NULL value. Pointers can point to another pointer. we can do pointer arithmatic. we can not change what references reference at howver we can change what pointer points at. */
int main() {
  system("clear");
  // references
  int a = 4;
  int &b = a; //'b' is a pointer pointing location of 'a'
  // with ref 'b' we can retrive location of 'a' and value of 'a' as well

  cout<<"location of variable a is: "<<&a<<" and value of vaiable a is: "<<a<<endl;
  cout<<"location referenced by variable b is: "<<&b<<" and value at that location is: "<<b<<endl;
  
  // pointers
  int *c = &a; // defining pinter
  cout<<"location of c is: "<<&c<<" and it's pointing to location: "<<c<<" and value at that location is: "<<*c<<endl;
  cout<<"refernece 'b' is not occupying any memory but pointer 'c' is.\n refernece 'b' --> location of 'a' \n pointer 'c'@some_location --> location of 'a'"<<endl;
  cout<<"defining reference \n [data-type] &[reference-name] = [variable-to-ber-referenced];"<<endl;
  cout<<"definging pointer \n [data-type] *[pointer-name] = &[variable-to-be-referenced];"<<endl;
  
  // looping 
}
