import React, { useState } from 'react';
import { rodarExercicios } from './components/Exercicios';

const NIVEL_COR = {
  fácil:  { bg: '#f0fdf4', badge: '#dcfce7', text: '#166534', border: '#86efac', label: '🟢 Fácil' },
  médio:  { bg: '#fffbeb', badge: '#fef9c3', text: '#854d0e', border: '#fde047', label: '🟡 Médio' },
  difícil:{ bg: '#fef2f2', badge: '#fee2e2', text: '#991b1b', border: '#fca5a5', label: '🔴 Difícil' },
};

const SECOES = [
  { nivel: 'fácil',   titulo: 'Nível Fácil — Sintaxe e Instanciação',    nums: [1,2,3,4,5,6,7,8,9,10] },
  { nivel: 'médio',   titulo: 'Nível Médio — Herança e Reuso',           nums: [11,12,14,15,16,17,18,19,20] },
  { nivel: 'difícil', titulo: 'Nível Difícil — Lógica e Integração',     nums: [21,22,23,24,25,26,27,28,29,30] },
];

export default function App() {
  const resultados = rodarExercicios();
  const byNum = Object.fromEntries(resultados.map(r => [r.num, r]));
  const [abertos, setAbertos] = useState({});
  const toggle = (num) => setAbertos(a => ({ ...a, [num]: !a[num] }));

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", maxWidth: '900px', margin: '0 auto', padding: '32px 16px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px', borderBottom: '3px solid #0ea5e9', paddingBottom: '20px' }}>
        <p style={{ margin: '0 0 4px 0', color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>JavaScript · Orientação a Objetos</p>
        <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '900', color: '#0f172a' }}>
          Lista 04 — OO com Classes
        </h1>
        <p style={{ margin: '8px 0 0 0', color: '#64748b', fontSize: '14px' }}>
          30 exercícios executados em tempo real · clique em cada card para ver o resultado
        </p>
      </div>

      {SECOES.map(({ nivel, titulo, nums }) => {
        const c = NIVEL_COR[nivel];
        return (
          <div key={nivel} style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ background: c.badge, color: c.text, padding: '4px 12px', borderRadius: '20px', fontWeight: '700', fontSize: '13px' }}>{c.label}</span>
              <h2 style={{ margin: 0, fontSize: '17px', fontWeight: '700', color: '#1e293b' }}>{titulo}</h2>
            </div>

            <div style={{ display: 'grid', gap: '10px' }}>
              {nums.map(num => {
                const ex = byNum[num];
                if (!ex) return null;
                const open = abertos[num];
                return (
                  <div
                    key={num}
                    onClick={() => toggle(num)}
                    style={{
                      background: open ? c.bg : '#fff',
                      border: `1px solid ${open ? c.border : '#e2e8f0'}`,
                      borderRadius: '10px',
                      padding: '14px 18px',
                      cursor: 'pointer',
                      transition: 'all .2s',
                      boxShadow: open ? `0 2px 12px rgba(0,0,0,0.08)` : '0 1px 3px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ background: c.badge, color: c.text, fontWeight: '800', fontSize: '12px', borderRadius: '6px', padding: '2px 8px', minWidth: '32px', textAlign: 'center' }}>
                          #{num}
                        </span>
                        <strong style={{ fontSize: '15px', color: '#1e293b' }}>{ex.nome}</strong>
                      </div>
                      <span style={{ color: '#94a3b8', fontSize: '18px' }}>{open ? '▲' : '▼'}</span>
                    </div>

                    {open && (
                      <div style={{ marginTop: '14px', borderTop: `1px solid ${c.border}`, paddingTop: '12px' }}>
                        {ex.linhas.map((linha, i) => (
                          <div key={i} style={{
                            fontFamily: "'Courier New', monospace",
                            fontSize: '13px',
                            color: '#1e293b',
                            padding: '4px 10px',
                            background: 'rgba(0,0,0,0.03)',
                            borderRadius: '5px',
                            marginBottom: '4px',
                            borderLeft: `3px solid ${c.border}`,
                          }}>
                            {linha}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
