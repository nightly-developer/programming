#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <map>
using namespace std;


int main(){ 
  system("clear");
  //To read a data type, use the following syntax:
  //scanf("%[format_specifier]", &val)
  //To print a data type, use the following syntax:
  //printf("`format_specifier`", val)
  /* You can also use cin and cout instead of scanf and printf; however, if you are taking a million numbers as input and printing a million lines, it is faster to use scanf and printf. */

  // Q2
/*int var1;long var2;char var3;float var4;double var5;
  scanf("%i %ld %c %f %lf",&var1,&var2,&var3,&var4,&var5);
  printf("%i\n%ld\n%c\n%f\n%lf",var1,var2,var3,var4,var5); */
  
  //Q3
/*int number;
  map <int,string> converter = {{1,"one"},{2,"two"},{3,"three"},{4,"four"},{5,"five"},{6,"six"},{7,"seven"},{8,"eight"},{9,"nine"}};
  cin>>number;
  (number<=9)?cout<<converter[number]:cout<<"Greater than 9"; */

  //Q4
/*int start,stop;
  cin>>start;
  cin>>stop;
  map <int,string> converter = {{1,"one"},{2,"two"},{3,"three"},{4,"four"},{5,"five"},{6,"six"},{7,"seven"},{8,"eight"},{9,"nine"}};
  for(int i=start;i<=stop;i++) {
    (1<=i && i<=9)?cout<<converter[i]:(i%2==0)?cout<<"even":cout<<"odd";
    cout<<endl;
  }

  int no_of_arrays, no_of_queries, k, i, j;
  cin>>no_of_arrays>>no_of_queries;
  int* parent_array[no_of_arrays];
  int responses[no_of_queries];
  for (int array=0;array<no_of_arrays;array++) {
    cin>>k;
    parent_array[array] = new int [k];
    for (int index=0;index<k;index++) {
      cin>>parent_array[array][index];
    }
  }
  for (int query=0;query<no_of_queries;query++) {
    cin>>i>>j;
    responses[query] = parent_array[i][j];
  }
  for (int response=0;response<no_of_queries;response++) {
    cout<<responses[response]<<endl;
  } */
  int[4];
  return 0;
}
