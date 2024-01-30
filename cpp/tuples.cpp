#include <iostream>
#include <tuple>
using namespace std;

int main () {
  system("clear");
  // tuples can contain elements with different data-type
  // in c++ we need to mention what types of data-types we are includeing
  // declaring & defining tuple with int string char data-type
  // <data-type> & [tuple-name](elements)
  tuple <int,string,float> person(21,"stud",3.25);
  // tuple should contain atleast one element of each data-type 
  // data-type and elements index should be corresponds to eachother
  cout<<"person's age "<<get<0>(person)<<" person's name "<<get<1>(person)<<" floating number is "<<get<2>(person)<<endl;
//get<1>(person) = "handsome";

  //swaping tuples
  tuple <int,string,float> swap_tuple = make_tuple(4,"slime",2.53);
  person.swap(swap_tuple);
  cout<<"person's age "<<get<0>(person)<<" person's name "<<get<1>(person)<<" floating number is "<<get<2>(person)<<endl;

  // decomposing tuple into its indivisual elements
  tuple <int,int> tie_tuple = make_tuple(25,41);
  int x,y; // x and y declared
  tie(x,y) = tie_tuple; // assigning tuple values to x & y
//cout<<x<<"\t"<<y<<endl;

  //tuple concatination
  tuple <int, char, string> prefix_tuple(25,'T',"Hello");
  tuple <string,float> suffix_tuple("World",3.21);
  //tuple <int,char,string,string,float> concat_tuple = tuple_cat(prefix_tuple,suffix_tuple);
  // auto key-word automatically determine what type a tuple should be
  auto concat_tuple = tuple_cat(prefix_tuple,suffix_tuple)
  cout<<get<0>(concat_tuple)<<endl;
  cout<<get<1>(concat_tuple)<<endl;
  cout<<get<2>(concat_tuple)<<endl;
  cout<<get<3>(concat_tuple)<<endl;
  cout<<get<4>(concat_tuple)<<endl;

}