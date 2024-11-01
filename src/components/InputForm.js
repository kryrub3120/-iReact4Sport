import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    LBRT_D_best_time: 555,
    LBRT_ND_best_time: 555,
    LBRT_2HAND_best_time: 555,
    CA: 12,
    body_height: 180,
    body_weight: 50,
    gender: "M"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Czas najlepszej reakcji dla ręki dominującej (ms):
        <input
          type="range"
          name="LBRT_D_best_time"
          min="200"
          max="999"
          value={formData.LBRT_D_best_time}
          onChange={handleChange}
        />
        <span>{formData.LBRT_D_best_time} ms</span>
      </label>

      <label>
        Czas najlepszej reakcji dla ręki niedominującej (ms):
        <input
          type="range"
          name="LBRT_ND_best_time"
          min="200"
          max="999"
          value={formData.LBRT_ND_best_time}
          onChange={handleChange}
        />
        <span>{formData.LBRT_ND_best_time} ms</span>
      </label>

      <label>
        Czas najlepszej reakcji dla obu rąk (ms):
        <input
          type="range"
          name="LBRT_2HAND_best_time"
          min="200"
          max="999"
          value={formData.LBRT_2HAND_best_time}
          onChange={handleChange}
        />
        <span>{formData.LBRT_2HAND_best_time} ms</span>
      </label>

      <label>
        Wiek chronologiczny:
        <input
          type="range"
          name="CA"
          min="10"
          max="18"
          value={formData.CA}
          onChange={handleChange}
        />
        <span>{formData.CA} lat</span>
      </label>

      <label>
        Wysokość ciała (cm):
        <input
          type="range"
          name="body_height"
          min="130"
          max="200"
          value={formData.body_height}
          onChange={handleChange}
        />
        <span>{formData.body_height} cm</span>
      </label>

      <label>
        Masa ciała (kg):
        <input
          type="range"
          name="body_weight"
          min="30"
          max="90"
          value={formData.body_weight}
          onChange={handleChange}
        />
        <span>{formData.body_weight} kg</span>
      </label>

      <label>
        Płeć:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="M">M</option>
          <option value="K">K</option>
        </select>
      </label>

      <button type="submit">Przeprowadź analizę</button>
    </form>
  );
}

export default InputForm;