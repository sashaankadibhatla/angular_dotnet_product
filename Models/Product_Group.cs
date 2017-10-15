using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GroupData.Models{
    
    public class Product_Group{
        [Key]
        [Required]
        [Range(0,999)]

        public int Id{get;set;}
        [StringLength(1000)]
        
        public string Name{get;set;}

    }
}