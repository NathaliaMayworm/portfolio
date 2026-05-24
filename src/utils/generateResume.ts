import { jsPDF } from 'jspdf';
import { profile } from '../data/profile';
import { socials } from '../data/socials';
import { experiences } from '../data/experiences';
import { skillCategories } from '../data/skills';

// ATS-friendly: standard font (Helvetica), single column, plain text,
// clear section headings, no images/icons in body, A4 with safe margins.

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN_X = 18;
const MARGIN_Y = 18;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;

const COLOR_TEXT: [number, number, number] = [20, 22, 38];
const COLOR_MUTED: [number, number, number] = [90, 95, 115];
const COLOR_ACCENT: [number, number, number] = [75, 62, 214];

export const generateResume = () => {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  doc.setFont('helvetica', 'normal');

  let y = MARGIN_Y;

  const ensureSpace = (needed: number) => {
    if (y + needed > PAGE_HEIGHT - MARGIN_Y) {
      doc.addPage();
      y = MARGIN_Y;
    }
  };

  const setColor = (rgb: [number, number, number]) => {
    doc.setTextColor(rgb[0], rgb[1], rgb[2]);
  };

  const writeWrapped = (
    text: string,
    {
      size = 10,
      style = 'normal',
      color = COLOR_TEXT,
      lineHeight = 1.45,
      indent = 0,
    }: {
      size?: number;
      style?: 'normal' | 'bold' | 'italic';
      color?: [number, number, number];
      lineHeight?: number;
      indent?: number;
    } = {},
  ) => {
    doc.setFont('helvetica', style);
    doc.setFontSize(size);
    setColor(color);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - indent) as string[];
    const blockLineHeight = (size * lineHeight) / 2.83465; // pt → mm conversion
    for (const line of lines) {
      ensureSpace(blockLineHeight);
      doc.text(line, MARGIN_X + indent, y);
      y += blockLineHeight;
    }
  };

  const sectionTitle = (title: string) => {
    y += 4;
    ensureSpace(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11.5);
    setColor(COLOR_ACCENT);
    doc.text(title.toUpperCase(), MARGIN_X, y);
    y += 1.5;
    doc.setDrawColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2]);
    doc.setLineWidth(0.4);
    doc.line(MARGIN_X, y, MARGIN_X + CONTENT_WIDTH, y);
    y += 5;
  };

  const linkedinShort = socials.linkedin.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const githubShort = socials.github.replace(/^https?:\/\//, '').replace(/\/$/, '');

  // ---------- HEADER ----------
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  setColor(COLOR_TEXT);
  doc.text(profile.fullName, MARGIN_X, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11.5);
  setColor(COLOR_ACCENT);
  doc.text(`${profile.role} · ${profile.roleDetail}`, MARGIN_X, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setColor(COLOR_MUTED);
  const contactLine = [
    profile.location,
    socials.email,
    linkedinShort,
    githubShort,
  ].join('  |  ');
  const contactLines = doc.splitTextToSize(contactLine, CONTENT_WIDTH) as string[];
  for (const line of contactLines) {
    doc.text(line, MARGIN_X, y);
    y += 4.5;
  }

  y += 2;
  doc.setDrawColor(220, 220, 230);
  doc.setLineWidth(0.2);
  doc.line(MARGIN_X, y, MARGIN_X + CONTENT_WIDTH, y);
  y += 4;

  // ---------- RESUMO ----------
  sectionTitle('Resumo Profissional');
  writeWrapped(
    'Software Engineer com +5 anos de experiência, com foco em front-end, atuando no desenvolvimento de aplicações escaláveis, performáticas e orientadas à experiência do usuário. Forte domínio de React, Next.js e TypeScript, com foco em arquitetura frontend, componentização e gerenciamento de estado com Redux e Zustand.',
    { size: 10 },
  );
  y += 1.5;
  writeWrapped(
    'Criação de Design Systems e bibliotecas de componentes reutilizáveis com Tailwind CSS, Styled Components e Storybook. Integração e consumo de APIs REST e GraphQL (Fetch API e Axios), além do desenvolvimento backend com Node.js e NestJS em arquitetura de microserviços, com foco em escalabilidade e sistemas distribuídos.',
    { size: 10 },
  );
  y += 1.5;
  writeWrapped(
    'Experiência com bancos de dados SQL e NoSQL (PostgreSQL e MongoDB), contribuindo para soluções end-to-end. Forte atuação em performance, qualidade de código e boas práticas de engenharia de software, e uso de IA aplicada ao desenvolvimento (Claude, Codex e Cursor) para aumentar produtividade, acelerar entregas e apoiar decisões técnicas.',
    { size: 10 },
  );

  // ---------- HABILIDADES ----------
  sectionTitle('Habilidades Técnicas');
  for (const category of skillCategories) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    setColor(COLOR_TEXT);
    const label = `${category.title}: `;
    const labelWidth = doc.getTextWidth(label);
    ensureSpace(5);
    doc.text(label, MARGIN_X, y);

    doc.setFont('helvetica', 'normal');
    setColor(COLOR_MUTED);
    const items = category.items.join(', ');
    const itemLines = doc.splitTextToSize(items, CONTENT_WIDTH - labelWidth) as string[];
    doc.text(itemLines[0] ?? '', MARGIN_X + labelWidth, y);
    y += 4.6;
    for (let i = 1; i < itemLines.length; i++) {
      ensureSpace(5);
      doc.text(itemLines[i], MARGIN_X + labelWidth, y);
      y += 4.6;
    }
    y += 0.5;
  }

  // ---------- EXPERIÊNCIA ----------
  sectionTitle('Experiência Profissional');
  experiences.forEach((exp, index) => {
    if (index > 0) y += 3;
    ensureSpace(20);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    setColor(COLOR_TEXT);
    doc.text(exp.role, MARGIN_X, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    setColor(COLOR_ACCENT);
    const companyLine = exp.employmentType
      ? `${exp.company} · ${exp.employmentType}`
      : exp.company;
    doc.text(companyLine, MARGIN_X, y);
    y += 4.6;

    doc.setFontSize(9.5);
    setColor(COLOR_MUTED);
    const periodLine = exp.location
      ? `${exp.startDate} — ${exp.endDate}  |  ${exp.location}`
      : `${exp.startDate} — ${exp.endDate}`;
    doc.text(periodLine, MARGIN_X, y);
    y += 5;

    writeWrapped(exp.description, { size: 10, color: COLOR_TEXT });
    y += 1;

    for (const highlight of exp.highlights) {
      ensureSpace(6);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      setColor(COLOR_ACCENT);
      doc.text('•', MARGIN_X, y);
      doc.setFont('helvetica', 'normal');
      setColor(COLOR_TEXT);
      const lines = doc.splitTextToSize(highlight, CONTENT_WIDTH - 5) as string[];
      doc.text(lines[0] ?? '', MARGIN_X + 4, y);
      y += 4.6;
      for (let i = 1; i < lines.length; i++) {
        ensureSpace(5);
        doc.text(lines[i], MARGIN_X + 4, y);
        y += 4.6;
      }
    }

    y += 1.5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    setColor(COLOR_TEXT);
    const stackLabel = 'Tech stack: ';
    const stackLabelWidth = doc.getTextWidth(stackLabel);
    ensureSpace(5);
    doc.text(stackLabel, MARGIN_X, y);
    doc.setFont('helvetica', 'normal');
    setColor(COLOR_MUTED);
    const stackText = exp.stack.join(', ');
    const stackLines = doc.splitTextToSize(
      stackText,
      CONTENT_WIDTH - stackLabelWidth,
    ) as string[];
    doc.text(stackLines[0] ?? '', MARGIN_X + stackLabelWidth, y);
    y += 4.6;
    for (let i = 1; i < stackLines.length; i++) {
      ensureSpace(5);
      doc.text(stackLines[i], MARGIN_X + stackLabelWidth, y);
      y += 4.6;
    }
  });

  // ---------- IDIOMAS ----------
  sectionTitle('Idiomas');
  writeWrapped('Português — Nativo  |  Inglês — Profissional', { size: 10 });

  // ---------- FOOTER ----------
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setColor(COLOR_MUTED);
    doc.text(
      `${profile.fullName} · ${socials.email} · Página ${i} de ${totalPages}`,
      MARGIN_X,
      PAGE_HEIGHT - 8,
    );
  }

  doc.save('Nathalia_Mayworm_Kapps_Curriculo.pdf');
};
