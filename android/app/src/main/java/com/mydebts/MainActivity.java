/*package com.mydebts;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.util.Log;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import org.devio.rn.splashscreen.SplashScreen;

import java.util.ArrayList;

public class MainActivity extends ReactActivity {*/

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  /*private static final String TAG = "MainActivity";

  private ArrayList<String> mDeadLines = new ArrayList<>();
  private ArrayList<String> mDebts = new ArrayList<>();
  private ArrayList<String> mNames = new ArrayList<>();

  @Override
  protected void onCreate(Bundle savedInstanceState){
    SplashScreen.show(this, R.style.SplashScreenTheme);
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);
    Log.d(TAG, "onCreate: started.");

    initRecyclerView();
  }
  protected String getMainComponentName() {
    return "MyDebts";
  }

  private void initRecyclerView(){
      Log.d(TAG, "initRecyclerView: init recyclerview");
      RecyclerView recyclerView = findViewById(R.id.recycler_view);
      RecyclerViewAdapter adapter = new RecyclerViewAdapter(this, mDeadLines, mDebts, mNames);
      recyclerView.setAdapter(adapter);
      recyclerView.setLayoutManager(new LinearLayoutManager(this));
  }
}*/

package com.mydebts;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  /*protected void onCreate(Bundle savedInstanceState){
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }*/
  protected String getMainComponentName() {
    return "MyDebts";
  }
}
