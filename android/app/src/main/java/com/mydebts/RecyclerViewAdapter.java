package com.mydebts;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.ViewHolder> {
    private static final String TAG = "RecyclerViewAdapter";

    private ArrayList<String> mDeadLines = new ArrayList<>();
    private ArrayList<String> mDebts = new ArrayList<>();
    private ArrayList<String> mNames = new ArrayList<>();
    private Context mContext;

    public RecyclerViewAdapter(Context context, ArrayList<String> deadLines, ArrayList<String> debts, ArrayList<String> names){
        mContext = context;
        mDeadLines = deadLines;
        mDebts = debts;
        mNames = names;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.layout_listitem, parent, false);
        ViewHolder holder = new ViewHolder(view);
        return holder;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Log.d(TAG, "onBindViewHolder: called.");

        holder.deadLine.setText(mDeadLines.get(position));
        holder.debts.setText(mDebts.get(position));
        holder.names.setText(mNames.get(position));

        holder.parentLayout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d(TAG, "onClick: clicked on: debts");

                Toast.makeText(mContext, "Mogege", Toast.LENGTH_SHORT).show();
            }
        });
    }

    @Override
    public int getItemCount() {
        return mDebts.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{

        TextView deadLine;
        TextView debts;
        TextView names;
        LinearLayout parentLayout;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            deadLine = itemView.findViewById(R.id.deadLine);
            debts = itemView.findViewById(R.id.debts);
            names = itemView.findViewById(R.id.name);
        }
    }
}
