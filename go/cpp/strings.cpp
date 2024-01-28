#include <iostream>
#include <string>
using namespace std;

int main() {
  system("clear");
  string str = "Hello World!";
  str[1] = '3';
  cout<<str<<endl;
  for (int i=0;i<str.size();i++) {
    (str[i] != ' ') ? cout<<str[i]<<"\t": cout<<endl;
  }
  cout<<endl;
}