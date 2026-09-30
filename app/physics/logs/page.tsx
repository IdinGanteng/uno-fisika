"use client";

import { useEffect, useState } from "react";
import {
  clearPhysicsScoreLogs,
  deletePhysicsScoreLog,
  exportPhysicsScoreLogsToCsv,
  getPhysicsScoreLogs,
  PhysicsLog,
} from "@/lib/physicsLogs";

export default function Logs() {
  const [rows, setRows] = useState<PhysicsLog[]>([]);

  const load = () => {
    setRows(getPhysicsScoreLogs());
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="container">
      <div className="row space">
        <h1>Physics Score Logs</h1>

        <div className="row">
          <button onClick={() => exportPhysicsScoreLogsToCsv()}>
            Export CSV
          </button>

          <button
            className="danger"
            onClick={() => {
              clearPhysicsScoreLogs();
              load();
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Mode</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((x) => (
              <tr key={x.id}>
                <td>
                  {new Date(x.createdAt).toLocaleString("id-ID")}
                </td>

                <td>{x.studentName}</td>

                <td>{x.mode}</td>

                <td>{x.studentTotalScore}</td>

                <td>
                  <button
                    className="danger"
                    onClick={() => {
                      deletePhysicsScoreLog(x.id);
                      load();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!rows.length && (
          <p className="muted">
            Belum ada skor tersimpan.
          </p>
        )}
      </div>
    </main>
  );
}