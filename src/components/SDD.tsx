import React from "react";
import { ShieldCheck, Database, Layout, Lock, Zap, FileCheck } from "lucide-react";

export default function SDD() {
  const sections = [
    {
      title: "1. Arsitektur Sistem",
      icon: Layout,
      content: "SIAP-SPJ menggunakan arsitektur Full-Stack Modern dengan React 19 di sisi klien dan Node.js (Express) di sisi server. Komunikasi data dilakukan melalui RESTful API yang aman."
    },
    {
      title: "2. Manajemen Database",
      icon: Database,
      content: "Menggunakan SQLite (better-sqlite3) dengan desain relasional yang dinamis. Tabel utama meliputi spj, tim_kegiatan, transport_detail, dan log_aktivitas untuk memastikan integritas data keuangan."
    },
    {
      title: "3. Keamanan & RBAC",
      icon: Lock,
      content: "Implementasi Role-Based Access Control (RBAC) dengan 4 level otorisasi: Admin, Bendahara Pengeluaran, Bendahara Penerimaan, dan Verifikator. Setiap akses dilindungi oleh sistem otentikasi."
    },
    {
      title: "4. Audit Trail",
      icon: FileCheck,
      content: "Setiap perubahan data (Create, Update, Delete) dicatat secara otomatis dalam tabel log_aktivitas, mencakup informasi user, jenis aktivitas, dan timestamp untuk transparansi penuh."
    },
    {
      title: "5. Nilai Strategis",
      icon: Zap,
      content: "Mendukung Reformasi Birokrasi melalui digitalisasi proses bisnis, meningkatkan akuntabilitas bendahara, dan memitigasi risiko temuan audit melalui validasi data otomatis."
    },
    {
      title: "6. Smart ASN",
      icon: ShieldCheck,
      content: "Mendorong profesionalisme ASN melalui pemanfaatan teknologi informasi dalam pengelolaan keuangan negara yang transparan dan efisien."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">System Design Document</h2>
        <p className="text-xl text-slate-500 font-serif italic">Modernisasi Proses Penyusunan Laporan Pertanggungjawaban DIPA dan PNBP</p>
        <div className="flex justify-center gap-4 pt-4">
          <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest">v1.0.0</span>
          <span className="px-4 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-widest">Confidential</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
              <section.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
            <p className="text-slate-600 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Ringkasan Eksekutif</h3>
          <p className="text-slate-400 leading-relaxed">
            SIAP-SPJ dirancang untuk mengatasi inefisiensi dalam penyusunan laporan pertanggungjawaban manual. 
            Dengan integrasi database relasional dan perhitungan otomatis, sistem ini menjamin akurasi data 
            hingga 100% dan mempercepat proses verifikasi dokumen pendukung.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>
    </div>
  );
}
