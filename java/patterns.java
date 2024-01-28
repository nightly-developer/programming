class Patterns {
  public static void main(String[] args) {
    // solidRectangle();
    // hollowRectangle();
    // halfPyramid();
    // reversePyramid();
    // shiftedPyramid();
    // floydtriangle();
    binaryTriangle();
  }

  //solid reactangle
  static void solidRectangle() {
    for (int i = 0; i < 5; i++) {
      for (int j = 0; j < 5; j++)
        System.out.print('*');
      System.out.println();
    }
  }

  //hollow rectangle
  static void hollowRectangle() {
    int n = 4;
    int m = 5;
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= m; j++) {
        if (i == 1 || j == 1 || i == n || j == m)
          System.out.print('*');
        else
          System.out.print(' ');
      }
      System.out.println();
    }
  }
  
  //half pyramid
  static void halfPyramid() {
    int height = 5;
    for (int i = 1; i <= height; i++) {
      for (int j = 1; j <= i; j++)
        System.out.print('*');
      System.out.println();
    }
  }

  //reverse pyamid
  static void reversePyramid() {
    int height = 5;
    for (int i = height; i > 0; i--) {
      for (int j = 1; j <= i; j++)
        System.out.print('*');
      System.out.println();
    }
  }

  //shifted pyramid
  static void shiftedPyramid() {
    int height = 4;
    for (int i = 1; i <= height; i++) {
      for (int j = 0; j < height; j++) {
        if (height - j <= i)
          System.out.print("*");
        else
          System.out.print(" ");
      }
      System.out.println();
    }
  }

  //Floyd's Triangle
  static void floydtriangle() {
    int n = 5;
    int num = 0;
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
        num++;
        System.out.print(num + " ");
      }
      System.out.println();
    }
  }
  
  //0-1 Triangle
  static void binaryTriangle() {
    int height = 5;
    for (int i = 1; i <= height; i++) {
      for (int j = 1; j <= i; j++) {
        int bit = ((i + j)%2 == 0) ? 1 : 0;
        System.out.print(bit + " ");
      }
      System.out.println();
    }
  }
}