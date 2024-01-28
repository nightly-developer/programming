class Guitar:
  def __init__(self,n_string=6):
    self.n_string = n_string
    self.callFunction()
  def callFunction(self):
    print("this function is called by class init method")

class BaseGuitar(Guitar):
  pass

class ElectricGuitar(Guitar):
  # def __init__(self):
  #   super().__init__(8)
  __cost = 900 #private attribute but can be acces by _classname__attribute
  def __secret(self):
    print("This is private method")

my_guitar = ElectricGuitar()
#print("child class:"+str(my_guitar.n_string))
#print("parent clas: "+str(Guitar().n_string))
print(my_guitar._ElectricGuitar__cost)
my_guitar._ElectricGuitar__secret() #calling private method
print(BaseGuitar(4).n_string)
print(ElectricGuitar(8).n_string)