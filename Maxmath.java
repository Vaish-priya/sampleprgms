package pgrms;
import java.util.Scanner;

public class Maxmath {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter Number 1:");
		
		int m = sc.nextInt();
		
		System.out.println("Enter Number 2:");
		
		int n = sc.nextInt();
		
		System.out.println(Math.max(m,n));
		
		sc.close();
	}

}
